import { Task, task } from "../../model/task";
import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<Task> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   const task = new Task(
      result[0][0].id,
      result[0][0].title,
      result[0][0].description,
      result[0][0].deadline,
      result[0][0].status,
      result[0][0].author_id,
      result[0][0].nickname
   )

   return task
}

