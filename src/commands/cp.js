import { getTransformedPath } from '../services/path-transform-service.js';
import { constants } from 'fs';
import { copyFile  } from 'fs/promises';
import { isFile } from '../services/path-service.js';

export const cp = async (parameters) => {
    const currentFilePath = parameters[0];
    const newFilePath = parameters[1];

    if (currentFilePath === undefined) {
        console.log('File path has not been set');

        return;
    }

    if (newFilePath === undefined) {
        console.log('File path for new file has not been set');

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
        await copyFile(currentTransformedFilePath, newTransformedFilePath, constants.COPYFILE_EXCL);

        console.log('File was copied');
    } catch {
        console.log('The file could not be copied');
    }
}