import { Product } from "../entities/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase {

    public addProduct = async (product: Product) => {
        await BaseDatabase.connection("labecom_back_products")
            .insert(product)
    }

    public getAll = async (): Promise<Product[]> => {
        const result = await BaseDatabase.connection("labecom_back_products")
            .select("*")
        return result
    }
}