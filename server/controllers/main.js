import mongoose from "mongoose";
import Stats from "../models/stats.js";
import Effects from "../models/effects.js";

export const getStats = async (req, res) => {
  try {
    const stats = await Stats.find();

    res.status(200).json(stats);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getEffects = async (req, res) => {
  try {
    const effects = await Effects.find();

    res.status(200).json(effects);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}