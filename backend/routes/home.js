import express from "express";
import {home, about} from "../controller/home.js";

const router = express.Router();

router.get("/", home);

router.get("/about", about);

export default router;