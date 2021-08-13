import { Request, Response } from "express"
import { PurchaseDataBase } from "../data/PurchaseDataBase"
import { UserDataBase } from "../data/UserDataBase"
import { Purchase } from "../entities/Purchase"
import { User } from "../entities/User"
import { getPurchasesByUserId } from "./getPurchasesByUserId"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const ud = new UserDataBase()
        const responseList = await ud.getAll()

        const IdList: any[] = []
        responseList.forEach((item :any) => {
            IdList.push(item.userID);
        });

        const filteredIds = IdList.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });

        const result: User[] = filteredIds.map((id) =>{
            const userInfo = responseList.filter((user:any)=> user.userID===id )  
            const userPurchases: Purchase[] = userInfo.map((pur:any) => new Purchase( pur.purchaseId, pur.userID, pur.productId, pur.quantity, pur.total_value ) )
           
            return new User(userInfo[0].userID, userInfo[0].userName, userInfo[0].email, userInfo[0].age, userPurchases)
        } )

        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}