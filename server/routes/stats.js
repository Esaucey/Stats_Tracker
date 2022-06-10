import express from "express";

import { getStats } from "../controllers/main.js";

const router = express.Router();

router.get('/', getStats);

export default router;