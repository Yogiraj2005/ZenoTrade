
const {model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsSchema =  model("position", PositionsSchema);

module.exports={PositionsSchema};