
export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        public quantity: number,
        public totalValue: number  
    ) {     }

    public getID(): string {
        return this.id
    }

    public getUserID(): string {
        return this.userId
    }

    public getProductID(): string {
        return this.productId
    }
    
}

