import express from "express";

import { jwtCheck, jwtParse } from "../middleware/auth";
import MyUserController from "../controllers/MyUserController";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
