import { connection } from "../connection";
import { User, user } from "../../model/user";

export const insertUser = async(
   user: User
): Promise<void> => {
   await connection.insert(user).into('to_do_list_users')
}