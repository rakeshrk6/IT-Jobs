import Amazon from "../models/amazon.js";

export const amazonController = async (req, res) => {
  try {
    const { profile, location } = req.query;

    const filter = {};
    if (profile) filter.title = new RegExp(profile, "i");
    if (location) filter.location = new RegExp(location, "i");

    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const jobs = await Amazon.find(filter).skip(skip).limit(limit);
    const totalJobs = await Amazon.countDocuments(filter);
    const totalPages = Math.ceil(totalJobs / limit);

    res.status(200).json({
      jobs,
      currentPage: page,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to fetch all prompts");
  }
};
