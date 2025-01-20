import Google from "../models/google.js";

export const googleController = async (req, res) => {
  try {
    const { profile, location } = req.query;

    const filter = {};
    if (profile) filter.title = new RegExp(profile, "i");
    if (location) filter.location = new RegExp(location, "i");

    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const jobs = await Google.find(filter).skip(skip).limit(limit);
    const totalJobs = await Google.countDocuments(filter);
    const totalPages = Math.ceil(totalJobs / limit);

    res.status(200).json({
      jobs,
      currentPage: page,
      totalPages,
      totalJobs,
    });
  } catch (error) {
    res.send("Failed to fetch jobs", { status: 500 });
  }
};
