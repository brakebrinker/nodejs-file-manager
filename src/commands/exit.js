import {getUserName} from "../services/user-name-service.js";

export const exit = () => {
    const userName = getUserName();

    console.log(`Thank you for using File Manager, ${userName}!`);

    process.exit(0);
}