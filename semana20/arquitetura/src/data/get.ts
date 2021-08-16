import { BaseDatabase } from "./BaseDatabase";


export const get = async (): Promise<any> => {
    try {

        const users: any = [];

        const result = await BaseDatabase.connection("User_Arq")
            .select("*")

        for (let user of result) {
            users.push(user);
        }

        return users;
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
