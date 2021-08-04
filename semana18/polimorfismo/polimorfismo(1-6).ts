export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;


}

const cliente: Client = {
    name: "nome",
    registrationNumber: 123,
    consumedEnergy: 5,

    calculateBill: () => {
        return 2;
    }
}

console.log(
    cliente.name,
    cliente.consumedEnergy,
    cliente.registrationNumber,
    cliente.calculateBill()
)

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }
}

const residence = new Residence(5, "123-50")
const commerce = new Commerce(3, "142-50")
const industry = new Industry(100, "1243-5")

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75

    }

    public getCPF(): string {
        return this.cpf;
    }

}


export class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

const teste = new CommercialClient("teste", 3, 100, "123", 5, "31231-21")

console.log(teste.calculateBill())


export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        public cnpj: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45 + this.machinesQuantity * 100)
    }

    public getCNPJ(): string {
        return this.cnpj
    }
}

const teste2 = new IndustrialClient("teste", 3, 100, "123", 5, "31231-21")

console.log(teste2.calculateBill())


class ClientManager {
    public clients: Client[] =[]

    public getClientsQuantity(): number {
        return this.clients.length
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }
}