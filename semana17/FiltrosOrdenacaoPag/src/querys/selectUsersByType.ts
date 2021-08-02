import { connection } from "../data/connection"

export default async function selectUsersByType(type:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select("id", "name", "email", "type" )
    .where("type", "LIKE", `${type}`)
      
    return result
 }