import { UserDatabase } from "../data/UserDatabase";
import { InvalidCredentials, InvalidRequest } from "../error/customError";

import { User, userDataDTO, userLoginDTO } from "../model/User";
import { generateToken } from "../services/Authenticator";
import { compareHash, generateHash } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";

const userDatabase = new UserDatabase()

export class UserBusiness {

    public async signup(userData: userDataDTO): Promise<string> {
        try {
            const { name, email, password } = userData

            if (!name || !email || !password) {

                throw new InvalidRequest
            }

            const id = generateId()
            const cypherPassword = await generateHash(password);

            const user = new User(id, name, email, cypherPassword)
            await userDatabase.create(user)
            const token: string = generateToken({ id })

            return token
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async login(userLogin: userLoginDTO): Promise<string> {
        try {
            const { email, password } = userLogin

            if (!email || !password) {
                throw new InvalidRequest
            }

            const user = await userDatabase.login(email)
            const passwordIsCorrect: boolean = await compareHash(password, user.getPassword())

            if (!passwordIsCorrect) {
                throw new InvalidCredentials
            }
            
            const token: string = generateToken({ id: user.getID() })

            return token
        } catch (error) {
            throw new Error(error.message);
        }
    }
}