import mongoose, { Schema } from "mongoose";

const SomeOtherSchema = new Schema({
  someStuff: String
});

export const SomeOtherModel = mongoose.model("SomeOtherModel", SomeOtherSchema);
