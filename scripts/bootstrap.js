const proc = require('child_process');
const fs = require('fs');
const path = 'server/config/config.json';
const fileContents = fs.readFileSync(path, 'utf8');
const configs = JSON.parse(fileContents);
const env = process.env.NODE_ENV || 'development';

console.info('\n\n    Installing base project dependencies');
console.log('---------------------------------------');
let args = ['install'];
let opts = { stdio: 'inherit', cwd: './', shell: true };
proc.spawnSync('yarn', args, opts);

console.info('\n\n    Installing client React app dependencies');
console.log('---------------------------------------');
opts = { stdio: 'inherit', cwd: 'client', shell: true };
proc.spawnSync('yarn', args, opts);

console.info('\n\n    Creating postgres database');
console.log('---------------------------------------');
// Sequelize (for Postgres) configuration
args = ['-U', 'postgres', configs[env].database];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('createdb', args, opts);

console.info('\n\n    Move to server directory');
console.log('---------------------------------------');
proc.spawnSync('cd server');

console.info('\n\n    Initializing database');
console.log('---------------------------------------');
args = ['init'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('sequelize', args, opts);

// This is to remove all data from the database so that we don't end up trying
// to create dummy data with duplicate primary keys (in the case where there is
// already dummy data in the database).
console.info('\n\n    Undoing database migrations');
console.log('---------------------------------------');
args = ['db:migrate:undo:all'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('sequelize', args, opts);

console.info('\n\n    Performing database migrations');
console.log('---------------------------------------');
args = ['db:migrate'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('sequelize', args, opts);

console.info('\n\n    Performing database seeding');
console.log('---------------------------------------');
args = ['db:seed:all'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('sequelize', args, opts);
