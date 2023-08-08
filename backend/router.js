import { Router } from "express";
import { methods as controller } from "./controller";

const router = Router();

router.get("/",controller.get);
router.get("/:id", controller.getId);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteNota );

export default router;