let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let objectId = Schema.ObjectId;

let order = {
    _id: { type: objectId, auto: true },
    username: { type: String, required: true },
    itemList: [{ type: String, required: true }],
    orderTime: { type: Date, required: true },
    contactNo: { type: Number, required: true },
    deliverAddress: { type: String, required: true },
    email: { type: String, require: true },
    expectedDeliverDate: { type: Date, require: true },
    paidStatus: { type: Boolean, default: 0 },
    deliveryStatus: { type: Boolean, default: 0 }
}
let orderSchema = new Schema(order, { versionKey: false });
let orders = mongoose.model("order", orderSchema);

module.exports = orders;