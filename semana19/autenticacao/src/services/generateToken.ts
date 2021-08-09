import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "10m"

export const generateToken = (id: string): string => {
    const token = jwt.sign(
        {id},
        process.env.JWT_KEY!,
        {expiresIn}
    )
    return token
}