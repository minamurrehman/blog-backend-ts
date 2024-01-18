import express, { Router } from "express";
import {
  create,
  getAll,
  update,
  delete as deleteBlog,
  getBySlug,
} from "@/controllers/blog";

const router: Router = express.Router();

router.get("/", getAll);
router.get("/:slug", getBySlug);
router.post("/", create);
router.patch("/:slug", update);
router.delete("/:slug", deleteBlog);
export default router;
