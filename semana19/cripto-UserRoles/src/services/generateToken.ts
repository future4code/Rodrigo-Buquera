import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/types";

const expiresIn = "10m"

export const generateToken = (id: string, role: string ): string => {
    const token = jwt.sign(
        {id, role},
        process.env.JWT_KEY!,
        {expiresIn}
    )
    return token
} 