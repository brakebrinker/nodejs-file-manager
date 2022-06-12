import { getCurrentDir, setCurrentDir } from '../services/current-dir-service.js';
import { dirname } from 'path';

export const up = async () => {
    const upDir = dirname(getCurrentDir());

    await setCurrentDir(upDir);
}