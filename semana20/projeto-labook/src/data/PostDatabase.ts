import { CustomError, NotFoundError } from "../error/customError";
import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "labook_posts"

export class PostDatabase extends BaseDatabase {

    public async create(post: Post): Promise<void> {
        try {
            await BaseDatabase.connection(TABLE_NAME)
            .insert({
                id: post.getID(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getDate(),
                author_id: post.getAuthorID()
             })
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public async findById(id: string): Promise<Post> {
        try {
            const queryResult: any = await BaseDatabase.connection(TABLE_NAME)
                .select("*")
                .where({ id })

            if (!queryResult[0]) {
                throw new NotFoundError           
            }

            const user = this.toModelPost(queryResult[0])

            return user
        } catch (error) {
            throw new CustomError(error.sqlMessage || error.message, error.statusCode || 400)
        }
    }

    public toModelPost(obj: any): Post {
        const { photo, id, description, type, created_at,  author_id } = obj
        return new Post(photo, id, description, type, created_at,  author_id)
    }

}