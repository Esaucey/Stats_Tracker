import express from "express";

import { getEffects } from "../controllers/main.js";

const router = express.Router();

router.get('/effects', getEffects);

export default router;