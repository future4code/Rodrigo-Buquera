import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/postRouter"
import { app } from "./controller/app"
import { relationsRouter } from "./routes/relationRouter"

app.use('/users', userRouter)

app.use('/posts', postRouter)

app.use('/relations', relationsRouter)