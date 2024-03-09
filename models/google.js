import { Schema, model, models } from "mongoose"

const GoogleSchema = new Schema({
  title: { type: String },
  companyName: { type: String },
  location: { type: String },
  jobType: { type: String },
  url: { type: String },
})

const Google = models.Google || model("Google", GoogleSchema)

export default Google
