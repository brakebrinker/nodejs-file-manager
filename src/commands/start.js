import { homedir } from 'os';
import { getUserName } from '../services/user-name-service.js';
import { printCurrentDir, setCurrentDir } from '../services/current-dir-service.js';


export const start = async (readLineInterface) => {
    const userName = getUserName();

    console.log(`Welcome to the File Manager, ${userName}!`);

    await setCurrentDir(homedir());

    printCurrentDir();

    readLineInterface.prompt();
}