const Blog = require("../Modal/blogpageM");

const blogregister = async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/blogpage");
};
const blogs = async (req, res) => {
  const data = await Blog.find({});
  res.render("blogpage", { data });
};
const remove = async (req, res) => {
  const id = req.query.id;
  const data = await Blog.findByIdAndDelete(id);
  res.redirect("/blogpage");
};
const editpage = async (req, res) => {
  const id = req.query.id;
  const data = await Blog.findById(id);
  res.render("Edit", { data });
};
const update = async (req, res) => {
  const id = req.body.id;
  await Blog.findByIdAndUpdate(id, req.body);
  res.redirect("/blogpage");
};

module.exports = { blogregister, blogs, remove, update, editpage };
