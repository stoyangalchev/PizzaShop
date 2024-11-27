import express from "express";
import { sendContact } from "../controller/contact/sendContact.js";
const router = express.Router();

router.post("/send", sendContact);

export default router;
