import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";

export const getData = (token:string): AuthenticationData =>{
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    return {id: payload.id}
}