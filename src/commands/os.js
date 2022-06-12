import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const os = async (parameters) => {
    const commandParameter = parameters[0];

    if (commandParameter === undefined) {
        console.log('Parameter is not provided');

        return;
    }

    if (!commandParameter.startsWith('--')) {
        console.log('Wrong parameter value');

        return;
    }

    switch (commandParameter) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            console.log(cpus());
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(arch());
            break;
        default:
            console.log('Command with this parameter does not exist');
            break;
    }
}