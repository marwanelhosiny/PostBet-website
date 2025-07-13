import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
    try {
        const app = express();

        // Serve images and videos
        app.use('/img', express.static(path.join(__dirname, '../Post__Bet/images'), {
            index: false,
            fallthrough: false,
        }));

        app.use('/vid', express.static(path.join(__dirname, '../Post__Bet/videos'), {
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

        // Create HTTP server instead of HTTPS
        const server = http.createServer(app);

        // Listen on port 3001 (or whatever port you prefer)
        const PORT = 3001;
        server.listen(PORT, () => {
            console.log(`HTTP Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Failed to start HTTP server:', error.message);
        process.exit(1);
    }
}

createServer();