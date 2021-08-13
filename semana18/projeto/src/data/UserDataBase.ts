import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase {

    public addUser = async (user: User) => {
        await BaseDatabase.connection("labecom_back_users")
            .insert({
                id: user.getID(),
                name: user.name,
                email: user.email,
                age: user.age
            })
    }

    public getAll = async (): Promise<any> => {
        const result = await BaseDatabase.connection.raw(`
        SELECT labecom_back_purchase.id AS purchaseId, labecom_back_users.id AS userID, labecom_back_users.name AS userName, email, age, labecom_back_products.id AS productId, labecom_back_products.name AS product, description, quantity, price, total_value
        FROM labecom_back_users
        JOIN labecom_back_purchase
        ON labecom_back_users.id = user_id
        JOIN labecom_back_products
        ON labecom_back_products.id = product_id
       
        `)
        return result[0]
    }

    public getUserById = async (id: string): Promise<User[]> => {
        const result = await BaseDatabase.connection("labecom_back_users")
            .select("*")
            .where("id", "=", `${id}`)
        return result
    }

    public toUserModel(obj: any): User{
        
           return new User(obj.id, obj.name, obj.email, obj.age, obj.purchases);
        }

}