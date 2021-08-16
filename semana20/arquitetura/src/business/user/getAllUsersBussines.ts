import { compare } from "../../services/hashManager";
import { BaseDatabase } from "../../data/BaseDatabase";
import { createUser } from "../../data/createUser";
import { getUserByEmail } from "../../data/getUsernyEmail";
import { generateToken, getTokenData } from "../../services/authenticator";
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator";
import { get } from "../../data/get";

export const getAllUsersBusiness = async ({token }:any):Promise<any> =>{

    // if(!token){
    //     throw new Error("Necesária autenticação")
    // }
  
    getTokenData(token)
 

    const result = await get()


    return result
}
