import { RelationsDatabase } from "../data/RelationsDatabase";
import { CustomError, InvalidCredentials, InvalidRequest } from "../error/customError";
import { Relation, relationsDataDTO } from "../model/Relations";
import { getTokenData } from "../services/Authenticator";

const relationsDatabase = new RelationsDatabase()

export class RelationsBusiness {

    public async befriend(relationsData: relationsDataDTO): Promise<void> {
        try {
            const { friendId, token } = relationsData

            if (!friendId || !token) {
                throw new InvalidRequest
            }

            const { id } = getTokenData(token)
           
            if (id === friendId){
                throw new CustomError("Amigo imaginário não vale, procure um amigo", 406)
            }

            const relation = new Relation(id, friendId)
            await relationsDatabase.create(relation)

        } catch (error) {
           throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async unfriend(relationsData: relationsDataDTO): Promise<void> {
        try {
            const { friendId, token } = relationsData

            if (!friendId || !token) {
                throw new InvalidRequest
            }

            const { id } = getTokenData(token)
           
            const relation = new Relation(id, friendId)
            await relationsDatabase.delete(relation)

        } catch (error) {
           throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }


}



















