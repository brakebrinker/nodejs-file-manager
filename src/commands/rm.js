import { getTransformedPath } from '../services/path-transform-service.js';
import { rm as rmFile } from 'fs/promises';
import { isFile } from '../services/path-service.js';

export const rm = async (parameters) => {
    const currentFilePath = parameters[0];

    if (currentFilePath === undefined) {
        console.log('File path has not been set');

        return;
    }

    const currentTransformedFilePath = await getTransformedPath(currentFilePath);

    const pathIsFile = await isFile(currentTransformedFilePath);

    if (!pathIsFile) {
        console.log('This path is not a file');

        return;
    }

    try {
        const removed = await rmFile(currentTransformedFilePath);

        if (removed === undefined) {
            console.log('File was removed');

            return;
        }

        console.log('The file could not be removed');
    } catch {
        console.log('The file could not be removed');
    }
}