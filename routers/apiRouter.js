import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter;
