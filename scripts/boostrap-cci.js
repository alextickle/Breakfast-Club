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

console.info('Creating Sequelize config file');
console.log('---------------------------------------');
args = ['config/config.example.json config/config.json'];
opts = { stdio: 'inherit', cwd: 'server', shell: true };
proc.spawnSync('cp', args, opts);

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
