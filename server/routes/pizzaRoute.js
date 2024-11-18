import express from "express";
const router = express.Router();

import { getPizzas } from "../controller/pizza/getPizzas.js";
import { filterPizza } from "../controller/pizza/getPizzas.js";
import { postPizza } from "../controller/pizza/postPizza.js";

router.get("/getpizzas", getPizzas);
router.post("/filterpizzas", filterPizza);
router.post("/addpizzas", postPizza);

export default router;
