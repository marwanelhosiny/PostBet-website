import express from 'express';
import https from 'https';
import { readFile } from 'fs/promises';
import fs from 'fs';
import tls from 'tls';
import path from 'path';
import { fileURLToPath } from 'url';
import { constants } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
    try {
        // Load certificate sets for each domain
        const certs = {
            'postbet.ae': {
                key: await readFile('/etc/letsencrypt/live/postbet.ae/privkey.pem'),
                cert: await readFile('/etc/letsencrypt/live/postbet.ae/fullchain.pem'),
                ca: [await readFile('/etc/letsencrypt/live/postbet.ae/chain.pem')],
            },
            'postly.ae': {
                key: await readFile('/etc/letsencrypt/live/postly.ae/privkey.pem'),
                cert: await readFile('/etc/letsencrypt/live/postly.ae/fullchain.pem'),
                ca: [await readFile('/etc/letsencrypt/live/postly.ae/chain.pem')],
            },
        };

        const defaultDomain = 'postly.ae'; // fallback domain cert

        const httpsOptions = {
            SNICallback: (domain, cb) => {
                const creds = certs[domain];
                if (creds) {
                    const context = tls.createSecureContext({
                        key: creds.key,
                        cert: creds.cert,
                        ca: creds.ca,
                    });
                    cb(null, context);
                } else {
                    console.warn(`Unknown domain: ${domain}. Falling back to default cert.`);
                    const fallback = tls.createSecureContext(certs[defaultDomain]);
                    cb(null, fallback);
                }
            },
            key: certs[defaultDomain].key,
            cert: certs[defaultDomain].cert,
            ca: certs[defaultDomain].ca,
            requestCert: false,
            rejectUnauthorized: false,
            secureOptions: constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1,
        };

        const app = express();

        // Serve images and videos
        app.use('/img', express.static(path.join(__dirname, '../Post-Bet/images'), {
            index: false,
            fallthrough: false,
        }));

        app.use('/vid', express.static(path.join(__dirname, '../Post-Bet/videos'), {
            index: false,
            fallthrough: false,
        }));

        // Logging
        app.use((req, res, next) => {
            console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`);
            next();
        });

        // Serve frontend app
        app.use(express.static(path.resolve(__dirname, 'dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
        });

        const server = https.createServer(httpsOptions, app);

        server.listen(443, () => {
            console.log('HTTPS Server is running on port 443 with SNI for multiple domains');
        });

        server.on('tlsClientError', (err, tlsSocket) => {
            console.error('TLS Client Error:', err.message);
            console.log('Client details:', {
                remoteAddress: tlsSocket.remoteAddress,
                remotePort: tlsSocket.remotePort,
            });
        });

    } catch (error) {
        console.error('Failed to start HTTPS server:', error.message);
        process.exit(1);
    }
}

createServer();
