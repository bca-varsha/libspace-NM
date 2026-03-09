import express from "express";
import { verifyToken } from "./verify_token.js";
import bookController from "./bookController.js";

const bookRouter = express.Router();


bookRouter.post("/addbook", verifyToken, bookController.addBook);
bookRouter.get("/getBooks", verifyToken, bookController.getAllBooks);
//  authT,
bookRouter.get("/:bookId", verifyToken, bookController.getBookById);
bookRouter.put("/:bookId", verifyToken, bookController.updateBook);
bookRouter.delete(
  "/deleteBook/:bookId",
  verifyToken,
  bookController.deleteBook,
);



export default bookRouter