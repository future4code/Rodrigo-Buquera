import { TableDataBase } from "./TableDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const start = async () => {
 
   try{
      
      new TableDataBase().createTables()

   }catch(error){
      printError(error)
   }
}

start()

