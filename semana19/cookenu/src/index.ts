import { app } from "./app";
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getUser from "./endpoints/getUser"
import getUserByID from "./endpoints/getUserById";
import createRecipe from "./endpoints/createRecipe";
import { getRounds } from "bcryptjs";
import getRecipe from "./endpoints/getRecipe";


app.get('/user/profile', getUser )
app.get('/user/:id', getUserByID )
app.get('/recipe/:id', getRecipe) 

app.post('/user/signup', createUser)
app.post('/user/login', login) 
app.post('/recipe', createRecipe) 