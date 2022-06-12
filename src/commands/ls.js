import { readdir } from 'fs/promises';
import { getCurrentDir } from '../services/current-dir-service.js';

export const ls = async () => {
    try {
        const files = await readdir(getCurrentDir());

        files.forEach((file) => {
            console.log(file);
        });
    } catch {
        console.log('Path does not exist');
    }
}