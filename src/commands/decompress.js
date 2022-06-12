import { getTransformedPath } from '../services/path-transform-service.js';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompress = async (parameters) => {
    const currentFilePath = parameters[0];
    const compressedFilePath = parameters[1];

    if (currentFilePath === undefined) {
        console.log('File path has not been set');

        return;
    }

    if (compressedFilePath === undefined) {
        console.log('File path for new file has not been set');

        return;
    }

    const currentTransformedPath = await getTransformedPath(currentFilePath);
    const compressedTransformedFilePath = await getTransformedPath(compressedFilePath);

    try {
        const source = await createReadStream(currentTransformedPath);
        const destination = await createWriteStream(compressedTransformedFilePath);

        const brotliDecompress = createBrotliDecompress();

        source.pipe(brotliDecompress).pipe(destination);
    } catch {
        console.log('File cannot be compressed');
    }
}