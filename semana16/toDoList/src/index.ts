import app from "./app"
import { createUser } from "./endpoints/createUser"
import { editUser } from "./endpoints/editUser"
import { getUserbyID } from "./endpoints/getUserbyID"


app.post("/user", createUser)
app.get("/user/:id", getUserbyID)
app.put("/user/edit/:id", editUser)