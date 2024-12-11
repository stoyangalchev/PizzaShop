import express from "express";
const router = express.Router();
import protect from "../middleware/protect.js";

import { getPizzas } from "../controller/pizza/getPizzas.js";
import { filterPizza } from "../controller/pizza/getPizzas.js";
import { postPizza } from "../controller/pizza/postPizza.js";

router.get("/getpizzas",protect, getPizzas);
router.post("/filterpizzas",protect, filterPizza);
router.post("/addpizzas",protect, postPizza);

export default router;
