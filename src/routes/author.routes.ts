import { Router } from "express";
import {
  getAuthorController,
  getAuthorsController,
  getLoggedinAuthorController,
} from "../controllers/author.controller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/authors", authMiddleware, getAuthorsController);

router.get("/authors/me", authMiddleware, getLoggedinAuthorController);

router.get("/authors/:id", authMiddleware, getAuthorController);

export const authorRoutes = router;
