import { app } from "./app";

import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getUser from "./endpoints/getUser"

app.post('/user/signup', createUser)
app.get('/user/profile', getUser )
app.post('/user/login', login) 