import { getTransformedPath } from '../services/path-transform-service.js';
import { rename } from 'fs/promises';
import { isFile } from '../services/path-service.js';

export const rn = async (parameters) => {
    const currentFilePath = parameters[0];
    const newFilePath = parameters[1];

    if (currentFilePath === undefined) {
        console.log('File path has not been set');

        return;
    }

    if (newFilePath === undefined) {
        console.log('File path for new file name has not been set');

        return;
    }

    const currentTransformedFilePath = await getTransformedPath(currentFilePath);
    const newTransformedFilePath = await getTransformedPath(newFilePath);

    const pathIsFile = await isFile(currentTransformedFilePath);

    if (!pathIsFile) {
        console.log('This path is not a file');

        return;
    }

    try {
        const renamed = await rename(currentTransformedFilePath, newTransformedFilePath);

        if (renamed === undefined) {
            console.log('File is renamed.');
        }
    } catch {
        console.log('Cannot rename the file');
    }
}