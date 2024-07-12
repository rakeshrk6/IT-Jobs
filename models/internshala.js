import pkg from "mongoose"
const { Schema, model, models } = pkg

const InternshalaSchema = new Schema({
  title: { type: String },
  companyName: { type: String },
  location: { type: String },
  stipend: { type: String },
  jobType: { type: String },
  url: { type: String },
  img: { type: String },
  date: { type: String, default: new Date().toLocaleString("en-IN") },
})

const Internshala =
  models.Internshala || model("Internshala", InternshalaSchema)

export default Internshala
