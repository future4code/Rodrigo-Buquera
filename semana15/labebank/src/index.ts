import { app } from "./app";
import { createAccount } from "./endpoints/createAccount";
import { deposit } from "./endpoints/deposit";
import { getBalance } from "./endpoints/getBalance";
import { getBalanceByCPF } from "./endpoints/getBalancebyID";
import { payBills } from "./endpoints/payBills";
import { transfer } from "./endpoints/transfer";


app.get("/users", getBalance)
app.get( "/users/:cpf", getBalanceByCPF)
app.post("/users", createAccount)
app.put("/users", deposit)
app.put("/users/pay",payBills)
app.put("/users/transfer", transfer )

