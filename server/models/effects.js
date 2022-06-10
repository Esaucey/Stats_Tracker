import mongoose from "mongoose";

const effectSchema = mongoose.Schema({
  name: String,
  casting: String,
  Description: String,
})

const Effects = mongoose.model('effects', effectSchema);
export default Effects;