const proc = require('child_process');
const fs = require('fs');
const path = 'server/config/config.json';
const fileContents = fs.readFileSync(path, 'utf8');
const configs = JSON.parse(fileContents);
const env = process.env.NODE_ENV || 'development';

console.info('Installing server dependencies');
console.log('---------------------------------------');
let args = ['install'];
let opts = { stdio: 'inherit', cwd: './', shell: true };
proc.spawnSync('yarn', args, opts);

console.info('Installing client dependencies');
console.log('---------------------------------------');
opts = { stdio: 'inherit', cwd: 'client', shell: true };
proc.spawnSync('yarn', args, opts);

// This is to remove all data from the database so that we don't end up trying
// to create dummy data with duplicate primary keys (in the case where there is
// already dummy data in the database).
console.info('Undoing database migrations');
console.log('---------------------------------------');
args = ['db:migrate:undo:all'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('./node_modules/sequelize-cli/bin/sequelize', args, opts);

console.info('Performing database migrations');
console.log('---------------------------------------');
args = ['db:migrate'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('./node_modules/sequelize-cli/bin/sequelize', args, opts);

console.info('Performing database seeding');
console.log('---------------------------------------');
args = ['db:seed:all'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('./node_modules/sequelize-cli/bin/sequelize', args, opts);
