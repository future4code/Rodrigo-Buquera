import { createUser } from "../../data/createUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async ({email, name, password, role }:any):Promise<any> =>{

    if(!name || !email || !password || !role){
        throw new Error("Preencha todos os campos da requisição");
    }

    if(email.indexOf("@") === -1){
        throw new Error("Email inválido");
    }

    if(password.length < 6){
        throw new Error("A senha precisa ter ao menos 6 caracteres");
    }
 
    const id:string = generateId()
    const hashPassword = await hash(password)
    await createUser(id, email, name, hashPassword, role)
    const token = generateToken({id, role})

    return token
}

