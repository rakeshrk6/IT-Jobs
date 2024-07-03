import { Schema, model, models } from "mongoose"

const AmazonSchema = new Schema({
  title: { type: String },
  companyName: { type: String },
  location: { type: String },
  jobType: { type: String },
  url: { type: String },
  date: { type: Date, default: Date.now },
})

const Amazon = models.Amazon || model("Amazon", AmazonSchema)

export default Amazon
