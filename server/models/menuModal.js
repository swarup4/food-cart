let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

let items = {
    _id: { type: objectId, auto: true },
    foodType: { type: String, required: true },
    foodName: [{ type: String, required: true }],
    foodPrice: { type: Date, required: true },
    foodCategory: { type: Number, required: true },
    availability: { type: Boolean, require: true },
    availabilityQuantity: { type: Number, require: true }
}
let foodSchema = new Schema(items, { versionKey: false });
let menu = mongoose.model("menu", foodSchema);

module.exports = orders;