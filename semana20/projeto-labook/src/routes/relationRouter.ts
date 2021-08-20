import express from "express"
import { RelationsController } from "../controller/RelationController"

export const relationsRouter = express.Router()

const relationsController = new RelationsController()

relationsRouter.post("/", relationsController.befriend )
relationsRouter.delete("/", relationsController.unfriend )