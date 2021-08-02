import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserbyPage } from "./endpoints/getUserbyPage";
import { getUsersASC } from "./endpoints/getUsersASC";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersWithAll } from "./endpoints/getUsersWithAll";

// app.get("/users/:type", getUsersByType) - ex1
app.get("/users", getUsersWithAll)
// app.get("/users", getUserbyPage)  - ex3
// app.get("/users", getUsersASC)  - ex2
// app.get("/users", getAllUsers)  - ex1
