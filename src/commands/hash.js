import { getTransformedPath } from '../services/path-transform-service.js';
import { readFile  } from 'fs/promises';
import { isFile } from '../services/path-service.js';
import { createHash } from 'crypto';

export const hash = async (parameters) => {
    const firstParameter = parameters[0];

    if (firstParameter === undefined) {
        console.log('File has not been set');

        return;
    }

    const filePath = await getTransformedPath(firstParameter);

    const pathIsFile = await isFile(filePath);

    if (!pathIsFile) {
        console.log('This path is not a file');

        return;
    }

    try {
        const fileContent = await readFile(filePath);

        const hash = createHash('sha256');

        hash.update(fileContent)

        console.log(hash.copy().digest('hex'));
    } catch {
        console.log('File cannot be hashed');
    }
}