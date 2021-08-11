
import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase {


  async postUser(user:User): Promise<void> {
    await BaseDatabase.connection("cookenu_users")
      .insert(user)
  }

  async getUserByEmail(email: string): Promise<any> {
    const result = await BaseDatabase.connection("cookenu_users")
      .select("*")
      .where("email", "=", `${email}`)

    return result[0] && User.toUserModel(result[0])

  }

  async getUserByID(id: string): Promise<User> {

    const result = await BaseDatabase.connection("cookenu_users")
      .select("*")
      .where("id", "=", `${id}`)

    return result[0] as User
  }
}