import { access } from 'fs/promises';
import { setCurrentDir } from '../services/current-dir-service.js';
import { up } from './up.js';
import { getTransformedPath } from '../services/path-transform-service.js';

export const cd = async (parameters) => {
    const firstParameter = parameters[0];

    if (firstParameter === undefined) {
        console.log('Path has not been set');

        return;
    }

    if (firstParameter === '..') {
        await up();

        return;
    }

    const path = await getTransformedPath(firstParameter);

    try {
        await access(path);
        await setCurrentDir(path);
    } catch {
        console.log('Path does not exist');
    }
}
