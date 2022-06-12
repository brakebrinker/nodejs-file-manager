const USER_NAME_PARAMETER = '--username';

export const getUserName = () => {
    let userName = '';

    if (userName !== '') {
        return userName;
    }

    const userNameParameter = process.argv.slice(2).find(
        (consoleArg) => consoleArg.startsWith(USER_NAME_PARAMETER),
    );

    if (userNameParameter === undefined) {
        throw new Error('User name should be provided');
    }

    return userNameParameter.split('=')[1];
}