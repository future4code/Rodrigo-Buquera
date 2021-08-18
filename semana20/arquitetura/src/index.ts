import { app } from "./app";
import { deleteUser } from "./controller/user/deleteUser";
import { getAllUsers } from "./controller/user/getAllUsers";
import { login } from "./controller/user/login";
import { signup } from "./controller/user/signup";



app.post("/signup", signup)
app.post("/login", login)
app.get("/all", getAllUsers)
app.delete("/:id", deleteUser)