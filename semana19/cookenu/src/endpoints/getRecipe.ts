import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { UserDataBase } from "../data/UserDataBase";
import { Recipe } from "../entities/Recipes";
import { User } from "../entities/User";
import { CustomError, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!
        const id = req.params.id

        if(!authorization){
            throw new Unauthorized
        }

        const auth = new Authenticator()
        const verifyUser = auth.getData(authorization)

        if(verifyUser.role !== "NORMAL" && verifyUser.role !== "ADMIN"  ){
            throw new CustomError("Usuário não autorizado", 401)
        }

        const rd = new RecipeDataBase()
        const result: Recipe = await rd.getRecipeByID(id)

        if(!result){
            throw new CustomError("Receita não encontrada", 404)
        }
        
        const recipe = new Recipe(result.id, result.title, result.description, result.date)

        res.status(201).send({ recipe })
    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

} 