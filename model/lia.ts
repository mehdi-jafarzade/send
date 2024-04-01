import mongoose, { Schema, models } from "mongoose";
const PhonemSchema = new Schema(
  {
    img: {type: String , required: true},
  },
  { timestamps: true }
);
const Phonem = models.Phonem || mongoose.model("Phonem", PhonemSchema);
export default Phonem;