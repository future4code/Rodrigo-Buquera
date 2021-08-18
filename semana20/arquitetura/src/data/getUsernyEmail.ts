import { BaseDatabase } from "./BaseDatabase";


export const getUserByEmail = async (email: string): Promise<any> => {
    try {
 
        const result = await BaseDatabase.connection("User_Arq")
            .select("*")
            .where({ email });

        if (!result[0]) {
            throw new Error("Usuário não encontrado");
        }

        return result[0];
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
