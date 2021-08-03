class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): void {
    console.log(`olá, sou ${this.name} bom dia!`)
  }
}

const user = new User("fefe", "email@email", "pessoa", "pass")

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer = new Customer("fe3123fe", "email@email", "pessoa2", "pass", "123")


class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ){
    super(id, email, name, password)
    this.admissionDate = admissionDate
    this.baseSalary = baseSalary
  }

  public GetAdmissionDate(): string {
    return this.admissionDate
  }

  public GetBaseSalary(): number {
    return this.baseSalary
  }

  public calculateTotalSalary() :number {
    return (this.GetBaseSalary() + 400) 
  }

}

const employee = new Employee( "fe31231111fe", "email@email", "pessoa3", "pass", "01-01-01", 5000)

console.log(employee.calculateTotalSalary())


class Seller extends Employee{
  constructor(
     id: string,
     email: string,
     name: string,
     password: string,
     admissionDate: string,
     baseSalary: number,
    private quantitySold: number = 0

  ) {
    super(id, email, name, password, admissionDate, baseSalary)
  }

  public setQuantitySold(quantity:number): void {
    this.quantitySold = quantity
  }
  
  public calculateTotalSalary():number {
    return(this.GetBaseSalary() + 400  + 0.05*this.quantitySold )
  }

}

const seller = new Seller( "fe31231111fe", "email@email", "pessoa3", "pass", "01-01-01", 5000)

seller.setQuantitySold(1000)

console.log("slario vendedor", seller.calculateTotalSalary())
