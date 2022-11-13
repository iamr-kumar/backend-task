import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { dislikeController, getBooksController, likeController } from "./../controllers/book.controller";

const router = Router();

router.get("/books", authMiddleware, getBooksController);

router.put("/books/like/:id", authMiddleware, likeController);

router.put("/books/dislike/:id", authMiddleware, dislikeController);

export const bookRoutes = router;
