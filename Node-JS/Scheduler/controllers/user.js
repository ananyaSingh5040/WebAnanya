const userModel = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDBusers = await userModel.find({});
  return res.json(allDBusers);
}
async function handleGetUserById(req, res) {
  const returnedUser = await userModel.findById(req.params.id);
  if (!returnedUser) return res.status(404).json({ msg: "User not found!" });
  return res.json(returnedUser);
}
async function handleCreateUser(req, res) {
  const body = req.body;
  if (!body || !body.firstName || !body.lastName || !body.email) {
    return res.status(400).json({ msg: "All fields are required!" });
  }
  const result = await userModel.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  });
  res.status(201).json({ msg: "success", id: result._id });
}
async function handleUpdateUserById(req, res) {
  const returnedUser = await userModel.findById(req.params.id);
  if (!returnedUser) {
    return res.status(404).send("User Not Found!");
  }
  await userModel.updateOne(returnedUser, { lastName: "Singh" });
  return res.status(200).json({ status: "success" });
}
async function handleDeleteUserById(req, res) {
  const returnedUser = await userModel.findById(req.params.id);
  if (!returnedUser) {
    return res.status(404).send("User Not Found!");
  }
  await userModel.deleteOne(returnedUser);
  return res.status(200).json({ status: "success" });
}
module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
