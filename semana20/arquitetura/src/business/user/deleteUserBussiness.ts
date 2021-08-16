import { compare } from "../../services/hashManager";
import { BaseDatabase } from "../../data/BaseDatabase";
import { createUser } from "../../data/createUser";
import { getUserByEmail } from "../../data/getUsernyEmail";
import { generateToken, getTokenData } from "../../services/authenticator";
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator";
import { get } from "../../data/get";
import { deleteUser } from "../../data/delete";

export const deleteUserBusiness = async ({token }:any):Promise<void> =>{

   
   const verifiedToken = getTokenData(token)
 
    if(verifiedToken.role !== "admin"){
        throw new Error("autorização insuficiente!")
    }

   await deleteUser(verifiedToken.id)

}
