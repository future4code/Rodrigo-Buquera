import { compare } from "../../services/hashManager";
import { BaseDatabase } from "../../data/BaseDatabase";
import { createUser } from "../../data/createUser";
import { getUserByEmail } from "../../data/getUsernyEmail";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator";

export const loginBusiness = async ({email, password }:any):Promise<string> =>{
      const user =  await getUserByEmail(email)
  
    const hashCompare = await compare(password, user.password)
      if (!hashCompare) {
        throw new Error("Senha inválida");
    }

    const {id, role} = user
      const accessToken = generateToken({id, role})
     

    return accessToken
}
