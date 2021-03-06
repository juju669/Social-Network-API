const { Schema, model } = require("mongoose");
const { isEmail } =  require('validator')

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: 6,
      maxLength: 16,
      required: [true, " field is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "please add a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },

    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});


const User = model("User", UserSchema);
module.exports = User;