import mongoose from "mongoose";

export const connectToDb = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("Mongo URI is not defined");
  }
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
