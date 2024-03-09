import { Schema, model, models } from "mongoose"

const InternshalaSchema = new Schema({
  title: { type: String },
  companyName: { type: String },
  location: { type: String },
  stipend: { type: String },
  jobType: { type: String },
  url: { type: String },
  img: { type: String },
})

const Internshala =
  models.Internshala || model("Internshala", InternshalaSchema)

export default Internshala
