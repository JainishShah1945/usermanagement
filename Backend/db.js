const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://jainish1945:jai0912@cluster0.mxzxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const conn = async () => {
  await mongoose.connect(mongoURI, {});
  console.log("connected");
};
module.exports = conn;
