let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

let user = {
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    contactNo: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    tokens: [{
        access: { type: String, required: true },
        token: { type: String, required: true }
    }],
    status: { type: Boolean, default: 1 }
}

let userSchema = new Schema(user, { versionKey: false });
let user = mongoose.model("user", userSchema);