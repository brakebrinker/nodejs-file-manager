export const parseLine = async (line) => {
    const splittedLine = line.split(' ');

    return {
        command: splittedLine.shift(),
        parameters: splittedLine,
    }
};