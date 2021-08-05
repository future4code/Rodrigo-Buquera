
import { Purchase } from "../entities/Purchase";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDataBase extends BaseDatabase {

    public addPurchase = async (purchase: Purchase) => {
        await BaseDatabase.connection("labecom_back_purchase")
            .insert({
                id: purchase.getID(),
                user_id: purchase.getUserID(),
                product_id: purchase.getProductID(),
                quantity: purchase.quantity,
                total_value: purchase.totalValue
            })           
    }

    public getAll = async (): Promise<Purchase[]> => {
        const result = await BaseDatabase.connection("labecom_back_purchase")
            .select("*")            
        return result
    }

    public getByUserId = async (id: string): Promise<Purchase[]> => {
        const result = await BaseDatabase.connection("labecom_back_purchase")
            .select("*")
            .where("user_id", "=", `${id}` )            
        return result
    }

    public toPurchaseModel(obj: any): Purchase{
        
        return new Purchase(obj.id, obj.user_id, obj.product_id, obj.quantity, obj.total_value);
     }

}