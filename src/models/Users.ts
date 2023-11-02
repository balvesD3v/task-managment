import mongoose, { Document, Schema } from "mongoose";

import { hash } from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const usersSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
      },
    },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hashedpassword = await hash(this.password, 10);
    this.password = hashedpassword;
    next();
  } catch (error: any) {
    return next(error);
  }
});

const User = mongoose.model<IUser>("User", usersSchema);

export default User;
