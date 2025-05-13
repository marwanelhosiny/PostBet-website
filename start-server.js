import serve from 'serve';

const server = serve('build', {
  port: 3000,
  ignore: ['node_modules']
});

console.log('Server running on port 3000');


