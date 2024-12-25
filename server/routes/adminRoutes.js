import express from "express";
const router = express.Router();

import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controller/auth/adminController.js"; // Corrected import path

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

export default router;
