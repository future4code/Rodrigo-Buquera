import { Purchase } from "./Purchase";

export class User {
    constructor(
        private id: string,
        public name: string,
        public email: string,
        public age: number,
        public purchases: Purchase[] = []
    ) { }   

    public getID(): string {
        return this.id
    }

   

}