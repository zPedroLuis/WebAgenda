// Este arquivo permite rodar backend e frontend juntos em desenvolvimento
const concurrently = require('concurrently');

concurrently([
  { command: 'npm run dev:server', name: 'backend', prefixColor: 'magenta' },
  { command: 'npm run dev:client', name: 'frontend', prefixColor: 'cyan' }
], {
  killOthers: ['failure', 'success'],
  restartTries: 1
});
