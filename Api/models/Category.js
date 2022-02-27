const mongooese = require("mongoose");

const CategorySchema = new mongooese.Schema({
    name:{
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongooese.model("Category", CategorySchema)