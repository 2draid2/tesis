import { Router } from "express";
import { methods as farmaciaController } from "../controlers/farmacias.controler";
const router=Router();

router.get("/:pos", farmaciaController.getFarmacia);
router.get("/", farmaciaController.getFarmacialg);
router.get("/id/:f_id", farmaciaController.getFarmaciaId);
router.post("/", farmaciaController.addFarmacia);
router.put("/act/:f_id", farmaciaController.updateFarmaciaId);
router.delete("/del/:f_id", farmaciaController.deleteFarmaciaId);




export default router;