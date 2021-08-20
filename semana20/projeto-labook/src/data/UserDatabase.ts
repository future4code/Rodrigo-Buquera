import { CustomError, NotFoundError } from "../error/customError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "labook_users"

export class UserDatabase extends BaseDatabase {

    public async create(user: User): Promise<void> {
        try {
            await BaseDatabase.connection(TABLE_NAME)
                .insert({
                    id: user.getID(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async login(email: string): Promise<User> {
        try {
            const queryResult: any = await BaseDatabase.connection(TABLE_NAME)
                .select("*")
                .where({ email })

            if (!queryResult[0]) {
                throw new NotFoundError           
            }

            const user = this.toModelUser(queryResult[0])

            return user
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public toModelUser(obj: any): User {
        const { id, name, email, password } = obj
        return new User(id, name, email, password)
    }

}