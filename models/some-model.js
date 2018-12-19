import mongoose, { Schema } from "mongoose";

const SomeSchema = new Schema({
  someStuff: String
});

export const SomeModel = mongoose.model("SomeModel", SomeSchema);
