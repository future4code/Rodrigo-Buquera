

import { Recipe } from "../entities/Recipes";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDataBase extends BaseDatabase {

  async postRecipe(recipe:Recipe): Promise<any> {
    const result =  await BaseDatabase.connection("cookenu_recipes")
      .insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        date: recipe.date,
        user_id: recipe.userId
      })

      return result[0] 
  }

  async getRecipeByID(id: string): Promise<Recipe> {

    const result = await BaseDatabase.connection("cookenu_recipes")
      .select("*")
      .where({id})

    return result[0] as Recipe
  }
}