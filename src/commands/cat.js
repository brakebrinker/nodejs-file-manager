import { getTransformedPath } from '../services/path-transform-service.js';
import { isFile } from '../services/path-service.js';
import { open } from 'fs/promises';

const ENCODING_TYPE = 'utf8';

export const cat = async (parameters) => {
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
        const fd = await open(filePath);
        const stream = fd.createReadStream({ encoding: ENCODING_TYPE});

        stream.pipe(process.stdout);
    } catch {
        console.log('Cannot read the file');
    }
}