import express from "express";

export const postRouter = express.Router()

postRouter.post("/create")
postRouter.post("/:id")