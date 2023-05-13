import { Router } from "express";
import { methods as farmaciaController } from "../controlers/farmacias.controler";
const router=Router();

router.get("/", farmaciaController.getFarmacia);
router.get("/:f_id", farmaciaController.getFarmaciaId);
router.put("/:f_id", farmaciaController.updateFarmaciaId);
router.post("/", farmaciaController.addFarmacia);
router.delete("/:f_id", farmaciaController.deleteFarmaciaId);




export default router;