import { Router } from "express";
import { getCitas,  } from "../controllers/citas.controller.js";

const router = Router();


router.get('/citas', getCitas)


export default router;