import { CustomError, NotFoundError } from "../error/customError";
import { Relation } from "../model/Relations";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "labook_relations"

export class RelationsDatabase extends BaseDatabase {

    public async create(relation: Relation): Promise<void> {
        try {

            await BaseDatabase.connection(TABLE_NAME)
                .insert({
                    user_id: relation.getUserID(),
                    friend_id: relation.getFriendId()
                })
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async delete(relation: Relation): Promise<void> {
        try {

            await BaseDatabase.connection(TABLE_NAME)
                .delete("*")
                .where({
                    user_id: relation.getUserID(),
                    friend_id: relation.getFriendId()
                })
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public toModelRelation(obj: any): Relation {
        const { user_id, friend_id } = obj
        return new Relation(user_id, friend_id)
    }
}