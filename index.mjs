import chalk from 'chalk';
import tmi from 'tmi.js';

if (process.argv.length !== 3) {
    console.error(chalk.red('Usage: node index.mjs <channel>'));
}

let channel = process.argv[2];

let client = new tmi.client({ channels: [channel] });
client.on('connected', (message) => console.log(message));
client.on('message', (_, { username, color }, msg) => console.log(chalk.hex(color || '#ffffff')(username), msg));
client.on('error', console.log);
client.connect()