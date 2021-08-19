import { Request, Response } from "express";
import moment from "moment";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { UserDataBase } from "../data/UserDataBase";
import { Recipe } from "../entities/Recipes";
import { User } from "../entities/User";
import { CustomError, InvalidRequest, Unauthorized } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";

export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization!
        const { title, description } = req.body

        if (!token) {
            throw new Unauthorized
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new InvalidRequest
        }

        const authenticator = new Authenticator()
        const { role, id } = authenticator.getData(token)
        const userId = id

        if (role !== "NORMAL" && role !== "ADMIN") {
            throw new InvalidRequest
        }

        const idGen = new IdGenerator()
        const recipeId = idGen.generateId()

        const creationDate = moment().format('L')

        const recipe = new Recipe(recipeId, title, description, creationDate, userId)

        const rd = new RecipeDataBase()
        await rd.postRecipe(recipe)

        res.status(201).send({ message: "receita criada com sucesso" })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)

    }
}