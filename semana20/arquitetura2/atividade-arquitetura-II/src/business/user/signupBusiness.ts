import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { signupInput, signupInputDTO, User, userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   userData: signupInputDTO
):Promise<string> => {
   if (
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.password ||
      !userData.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(userData.password);

   const newUser = new User(
      generateId(),
      userData.name,
      userData.nickname,
      userData.email,
      cypherPassword,
      userData.role
      )

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: userData.role
   })

   return token

}
