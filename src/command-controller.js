import readline from 'readline';
import { exit } from './commands/exit.js';
import { start } from './commands/start.js';
import { printCurrentDir } from './services/current-dir-service.js';
import { invalidInput } from './services/error-service.js';
import { up } from './commands/up.js';
import { parseLine } from './services/line-parse-service.js';
import { cd } from './commands/cd.js';
import { ls } from './commands/ls.js';
import { cat } from './commands/cat.js';
import { add } from './commands/add.js';
import { rn } from './commands/rn.js';
import { cp } from './commands/cp.js';
import { mv } from './commands/mv.js';
import { rm } from './commands/rm.js';
import { os } from './commands/os.js';
import { hash } from './commands/hash.js';
import { compress } from './commands/compress.js';
import { decompress } from './commands/decompress.js';

export const commandController = async () => {
    const readLineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    await start(readLineInterface);

    readLineInterface
        .on('line', async (line) => {
            const parsedLine = await parseLine(line.trim());

            switch (parsedLine.command) {
                case '.exit':
                    exit();
                    break;
                case 'up':
                    await up(readLineInterface);
                    break;
                case 'cd':
                    await cd(parsedLine.parameters);
                    break;
                case 'ls':
                    await ls();
                    break;
                case 'cat':
                    await cat(parsedLine.parameters);
                    break;
                case 'add':
                    await add(parsedLine.parameters);
                    break;
                case 'rn':
                    await rn(parsedLine.parameters);
                    break;
                case 'cp':
                    await cp(parsedLine.parameters);
                    break;
                case 'mv':
                    await mv(parsedLine.parameters);
                    break;
                case 'rm':
                    await rm(parsedLine.parameters);
                    break;
                case 'os':
                    await os(parsedLine.parameters);
                    break;
                case 'hash':
                    await hash(parsedLine.parameters);
                    break;
                case 'compress':
                    await compress(parsedLine.parameters);
                    break;
                case 'decompress':
                    await decompress(parsedLine.parameters);
                    break;
                default:
                    invalidInput();
                    break;
            }

            printCurrentDir();

            readLineInterface.prompt();
        })
        .on('close', () => {
            exit();
        });
};