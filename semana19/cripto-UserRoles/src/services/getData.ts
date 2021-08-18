import { AuthenticationData } from "../types/types";
import * as jwt from "jsonwebtoken";

export const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    const result: AuthenticationData = { id: payload.id, role: payload.role }
    return result
}