import mongoose from "mongoose";

const statsSchema = mongoose.Schema({
  name: String,
  health: {
    type: Number,
    default: 0
  },
  armorClass: {
    type: Number,
    default: 0
  },
  proficiencies: {
    type: Number,
    default: 0
  },
})

const Stats = mongoose.model('basicStats', statsSchema);
export default Stats;