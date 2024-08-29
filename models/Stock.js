const { Schema, model } = require("mongoose");

const stockSchema = new Schema({
    code : {
        type: String,
        required: true,
        unique: true,
    },
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },

}, {timestamps: true});

stockSchema.index({"$**" : "text"});

module.exports = model("Stock", stockSchema);