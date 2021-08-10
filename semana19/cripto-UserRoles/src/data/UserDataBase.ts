
import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase {


  async postUser(user:User): Promise<User> {
    // const user: User = { id, email, password }
    await BaseDatabase.connection("users_roles")
      .insert(user)

    return user
  }

  async getUserByEmail(email: string): Promise<any> {
    const result = await BaseDatabase.connection("users_roles")
      .select("*")
      .where("email", "=", `${email}`)

    return result[0]

  }

  async getUserByID(id: string): Promise<User> {

    const result = await BaseDatabase.connection("users_roles")
      .select("*")
      .where("id", "=", `${id}`)

    return result[0]
  }



}