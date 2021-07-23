import app from "./app"
import { addResponsible } from "./endpoints/addResponsible"
import { createTask } from "./endpoints/createTask"
import { createUser } from "./endpoints/createUser"
import { editUser } from "./endpoints/editUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAssignments } from "./endpoints/getAssignments"
import { getTasksByID } from "./endpoints/getTaskByID"
import { getTasksByUser } from "./endpoints/getTasksByUser"
import { getUser } from "./endpoints/getUser"
import { getUserbyID } from "./endpoints/getUserbyID"



app.get("/user", getUser)
app.get("/user/all", getAllUsers)
app.get("/user/:id", getUserbyID)
app.post("/user", createUser)
app.put("/user/edit/:id", editUser)


app.get("/task", getTasksByUser)
app.get("/task/:id", getTasksByID)
app.get("/task/:id/responsible", getAssignments)
app.post("/task", createTask)
app.post("/task/responsible", addResponsible)