import { resourceLimits } from "worker_threads"
import { connection } from "../data/connection"

export default async function selectUsersWithAll(
    name: string,
    type: string,
    sort: string,
    order: string,
    page: number,
    size: number
): Promise<any> {

    const result = await connection("aula48_exercicio")
        .select("id", "name", "email", "type")
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type", "=", `${type}`)
        .orderBy(sort, order)
        .limit(size)
        .offset(size * (page - 1))

    return result
}