import { BaseDatabase } from "./BaseDatabase";


export const createUser = async (
    id: string,
    email: string,
    name: string,
    password: string,
    role: string //opcional criar ENUM
): Promise<void> => {
    try {
        await BaseDatabase.connection("User_Arq")
            .insert({
                id,
                email,
                name,
                password,
                role
            })
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}