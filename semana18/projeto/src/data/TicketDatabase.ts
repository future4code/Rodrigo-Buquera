import { Ticket } from "../entities/Ticket";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDataBase extends BaseDatabase {

    public addTicket = async (id: string, origin:string, destiny:string) => {
        await BaseDatabase.connection("labecom_back_tickets")
            .insert({ id,  origin , destiny })
    }

    public getAll = async (): Promise<Ticket[]> => {
        const result = await BaseDatabase.connection("labecom_back_tickets")
            .select("*")
            .join("labecom_back_products", "ticket_id", "=", "labecom_back_tickets.id")
        return result
    }
}