import { Router } from "express";
import { loginAuthorController, registerAuthorController } from "../controllers";

const router = Router();

router.post("/auth/register", registerAuthorController);

router.post("/auth/login", loginAuthorController);

export const authRoutes = router;
