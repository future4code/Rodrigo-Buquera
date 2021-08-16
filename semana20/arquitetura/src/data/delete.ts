import { BaseDatabase } from "./BaseDatabase";


export const deleteUser = async (id:string): Promise<void> => {
    try {

             await BaseDatabase.connection("User_Arq")
            .delete("*")
            .where({id})

       
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
