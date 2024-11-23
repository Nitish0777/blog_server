import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import {
  validateSignup,
  validateLogin,
} from "../middleware/validators/auth.validator.js";
import { validateRequest } from "../utils/validator.utils.js";

const router = express.Router();

router.post("/signup", validateSignup, validateRequest, signup);
router.post("/login", validateLogin, validateRequest, login);
router.post("/logout", logout);
export default router;
