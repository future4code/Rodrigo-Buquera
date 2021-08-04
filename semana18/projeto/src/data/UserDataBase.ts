import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase {

    public addUser = async (user: User) => {
        await BaseDatabase.connection("labecom_back_users")
            .insert(user)
    }

    public getAll = async ():Promise<any> => {
       const result = await BaseDatabase.connection("labecom_back_users")
            .select("*")
        
        return result
    }
}