import { selectTaskById } from "../../data/task/selectTaskById"
import { taskIdDTO } from "../../model/task"

export const getTaskByIdBusiness = async (
   {id}: taskIdDTO
) => {

   const result = await selectTaskById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

  

   return result
}