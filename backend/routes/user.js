import express from "express";
import { register, login } from "../controller/login_register.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", (req, res) => {
    res.send("Hello Here this is just to check working!");
});

export default router;
