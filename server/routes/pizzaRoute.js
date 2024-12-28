import express from "express";
const router = express.Router();
import protect from "../middleware/protect.js";

import { getPizzas } from "../controller/pizza/getPizzas.js";
import { filterPizza } from "../controller/pizza/getPizzas.js";
import { postPizza } from "../controller/pizza/postPizza.js";
import { deletePizza } from "../controller/pizza/deletePizza.js";
import { editPizza } from "../controller/pizza/editPizza.js";
import upload from "../middleware/upload.js";

router.get("/getpizzas", getPizzas);
router.post("/filterpizzas", protect, filterPizza);
router.post("/addpizzas", upload.single("image"), protect, postPizza);
router.put("/editpizzas/:id", upload.single("image"), protect, editPizza);
router.delete("/deletepizzas/:id", protect, deletePizza);

export default router;
