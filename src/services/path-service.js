import { stat } from 'fs/promises';

export const isFile = async (filePath) => {
    try {
        const pathStat = await stat(filePath);

        return pathStat.isFile();
    } catch {
        console.log('Wrong path');

        return false;
    }
}

export const isDirectory = async (dirPath) => {
    try {
        const pathStat = await stat(dirPath);

        return pathStat.isDirectory();
    } catch {
        console.log('Wrong path');

        return false;
    }
}