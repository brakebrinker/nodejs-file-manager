import { isDirectory } from './path-service.js';

let currentDir = '';

export const printCurrentDir = () => {
    console.log(`You are currently in ${currentDir}`);
}

export const getCurrentDir = () => {
    return currentDir;
}

export const setCurrentDir = async (path) => {
    const pathIsDirectory = await isDirectory(path);

    if (!pathIsDirectory) {
        console.log('Path is not directory');

        return;
    }

    currentDir = path;
}

