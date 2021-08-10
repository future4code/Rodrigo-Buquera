import * as bcrypt from "bcryptjs";

export const VerifyHash = async (s:string, hash: string):Promise<boolean> => {
    return bcrypt.compare(s, hash)
}

