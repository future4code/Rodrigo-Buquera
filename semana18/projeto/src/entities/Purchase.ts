import { Product } from "./Product";
import { User } from "./User";

export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        public quantity: number,
        public totalValue: number  
    ) {
       
    }

    


}

