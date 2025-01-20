import Google from "../models/google.js";
import Internshala from "../models/internshala.js";

export const internshalaController = async (req, res) => {
  try {
    const { profile, location, stipend } = req.query;

    const filter = {};
    if (profile) filter.title = new RegExp(profile, "i");
    if (location) filter.location = new RegExp(location, "i");
    if (stipend) filter.stipend = new RegExp(stipend, "i");

    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const jobs = await Internshala.find(filter).skip(skip).limit(limit);
    const totalJobs = await Internshala.countDocuments(filter);
    const totalPages = Math.ceil(totalJobs / limit);

    res.status(200).json({
      jobs,
      currentPage: page,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    res.send("Failed to fetch all prompts", { status: 500 });
  }
};
