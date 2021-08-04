// 1a) o construtor serve para criar o objeto de fato, antes dele havia apenas a definição. Para faxer essa chamada e cria outro objeto é usado o "new" no caso new UsserAccount.

// 1b) uma vez para chamado do construtor

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }


    getUserInfo(): void{
        console.log("informações usuario", "CPF:", this.cpf, "Nome:", this.name, "idade:", this.age)
    }

    getUserName(): string{
        return this.name 
    }
 
    setTransaction(trans: Transaction):void{
        this.transactions.push(trans)
      
    }

    setBalance():void{
        const bal = this.transactions.map((trans) => trans.getValue())
       this.balance = bal.reduce((a, b) => a + b, 0 )

    }

    getBalance(): number{
        this.setBalance()

       return this.balance
    }
  }

 const user = new UserAccount("1231323", "rod", 32)

 user.getUserInfo()

 const user2 = new UserAccount("fewfw", "3ola", 12)
 const user3 = new UserAccount("erir", "lola", 17)

// 1c) é necessário usar um método(setter), pra isso é preciso definir ele dentro da classe.


//2

class Transaction {
   private description: string
   private value: number
   private date: string

    constructor( description: string, value: number, date: string ){
        this.description = description;
        this.value  = value;
        this.date = date
    }

    getInfo(): void {        
         console.log("transações",this.description, this.value, this.date)
    }

    getValue(): number{
        return this.value
    }

  }

  const conta = new Transaction("conta agua", 32, "hoje")

  conta.getInfo()

  const cntaLuz = new Transaction("conta luz", 112, "hoje")
  const aluguel = new Transaction("aluguel", 1111, "hoje")

  //3 

  class Bank {
      private accounts: UserAccount[] = []

     setAccounts(user: UserAccount):void{
        this.accounts.push(user)
     } 
    
     getAllAccounts(): UserAccount[]{
        return this.accounts
     }

  }

  const banco = new Bank()

  banco.setAccounts(user)
  banco.setAccounts(user2)
  banco.setAccounts(user3)

  console.log(banco)

  user.setTransaction(aluguel)

  user.setTransaction(cntaLuz)

  console.log(banco.getAllAccounts()[0].getBalance())

