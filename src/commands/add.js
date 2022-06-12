import { getTransformedPath } from '../services/path-transform-service.js';
import { createWriteStream } from 'fs';

export const add = async (parameters) => {
    const firstParameter = parameters[0];

    if (firstParameter === undefined) {
        console.log('File has not been set');

        return;
    }

    const filePath = await getTransformedPath(firstParameter);

    try {
        const writeStream = await createWriteStream(filePath);

        process.stdin.pipe(writeStream);

        console.log('File is created.');
    } catch {
        console.log('Cannot read the file');
    }
}