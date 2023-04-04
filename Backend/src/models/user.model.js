const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    destination: { type: String, required: true },
    travellers: { type: String, required: true },
    budgetPerPerson: { type: String, required: true },
    currency: {
        type: String,
        enum: ["USD", "INR", "EUR"],
        default: "USD"
    },

}, { versionKey: false, timestamps: true })

const userModel = mongoose.model("user", userSchema)

module.exports = userModel