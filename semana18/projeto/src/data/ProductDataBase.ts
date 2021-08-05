import { Product } from "../entities/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase {

    public addProduct = async (product: Product) => {
        await BaseDatabase.connection("labecom_back_products")
            .insert({
                id: product.getID(),
                name: product.name,
                description: product.description,
                price: product.price,
                ticket_id: product.ticketID
            })
    }

    public getAll = async (order?: string): Promise<Product[]> => {
        const result = await BaseDatabase.connection("labecom_back_products")
            .select("*")
            .orderBy("price", `${order}`)
        return result
    }

    public getProductById = async (id:string): Promise<Product[]> => {
        const result = await BaseDatabase.connection("labecom_back_products")
            .select("*")         
            .where("id", "=", `${id}`)
        return result
    }

    public toProductModel(obj: any): Product{
        
           return new Product(obj.id, obj.name, obj.description, obj.price, obj.ticketID);
        }

}