import { getCurrentDir } from './current-dir-service.js';

export const getTransformedPath = async (path) => {
    return path.startsWith('/')
        ? path
        : `${getCurrentDir()}/${await parseRelativePath(path)}`;
}

const parseRelativePath = async (path) => {
    return path.startsWith('./') ? path.replace('./', '') : path;
}