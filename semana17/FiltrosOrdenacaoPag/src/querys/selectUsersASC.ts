import { connection } from "../data/connection"

export default async function selectUsersASC(sort: string, order: string): Promise<any> {
    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .orderBy(sort, order)
        

    return result
}