import { BaseDatabase } from "./BaseDatabase";

export class TableDataBase extends BaseDatabase {

    public createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
        CREATE TABLE labecom_back_users (
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            age INT NOT NULL
            );
            
            CREATE TABLE labecom_back_tickets (
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            origin VARCHAR(100) NOT NULL,
            destiny VARCHAR(50) NOT NULL
            );
            
            CREATE TABLE labecom_back_products (
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description VARCHAR(250) NOT NULL,
            price FLOAT NOT NULL,
            ticket_id VARCHAR(50), 
            FOREIGN KEY (ticket_id) REFERENCES labecom_back_tickets(id)
            );
            
            CREATE TABLE labecom_back_purchase(
            id VARCHAR(50) NOT NULL PRIMARY KEY ,
            user_id VARCHAR(50) NOT NULL,
            product_id VARCHAR(50) NOT NULL,
            quantity INT NOT NULL,
            total_value FLOAT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecom_back_users(id),
            FOREIGN KEY (product_id) REFERENCES labecom_back_products(id)
            );

            INSERT INTO labecom_back_users VALUES ( "1241.1213", "Marcos",  "marcos@marcos.com", 18);
            INSERT INTO labecom_back_users VALUES ( "432434.432", "Julia",  "julia@jula.com", 29);

            INSERT INTO labecom_back_tickets VALUES ( "d2f2e32", "Manaus",  "lua");
            INSERT INTO labecom_back_tickets VALUES ( "r23r23r2", "SP",  "Rio");

            INSERT INTO labecom_back_products VALUES ( "d2e32ef2e32", "viagem para lua", "só de ida", 312441.50, "d2f2e32");
            INSERT INTO labecom_back_products VALUES ( "54545345", "rio-sp", "só  isso mesmo", 100.50, "r23r23r2");
           
            INSERT INTO labecom_back_purchase VALUES( "rt43t", "432434.432", "d2e32ef2e32", 1, 312441.50);
            INSERT INTO labecom_back_purchase VALUES( "4865", "432434.432", "54545345", 1, 100.50);
            INSERT INTO labecom_back_purchase VALUES( "84146544", "1241.1213", "54545345", 1, 100.50);
        `)         
    }  
}