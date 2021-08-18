import moment from "moment";
import { PostDatabase } from "../data/PostDatabase";
import { InvalidRequest, NotFoundError } from "../error/customError";
import { authenticationData } from "../model/AuthenticationData";
import { Post, postDataDTO, postIdDTO } from "../model/Post";
import { getTokenData } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";

const postDatabase = new PostDatabase()

export class PostBusiness {

    public async createPost(postData: postDataDTO): Promise<void> {
        try {
            const { photo, description, type, token } = postData

            if (!photo || !description || !type || !token) {
                throw new InvalidRequest
            }

            const createdAt = new Date() // vai dar ruim
            const tokenData: authenticationData = getTokenData(token)
            // validação?
            const id: string = generateId()
            const post = new Post(photo, id, description, type, createdAt, tokenData.id)

            await postDatabase.create(post)


        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async findById(postId: postIdDTO): Promise<Post> {
        try {
            const { id } = postId

            if (!id) {
                throw new NotFoundError
            }

            const post = await postDatabase.findById(id)

            return post
        } catch (error) {
            throw new Error(error.message);
        }
    }
}