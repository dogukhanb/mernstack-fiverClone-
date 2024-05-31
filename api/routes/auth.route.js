import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

//  router oluşturma
const router = express.Router();

//  yolları belirle
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
