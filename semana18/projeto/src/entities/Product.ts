export class Product {
    constructor(
        private id: string,
        public name: string,
        public description: string,
        public price: number,
        public ticketID?:string
    ) { }

    public getID(): string {
        return this.id
    }

}