const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: Number,
    category: String,
    categoryDetail: Array,
})

module.exports = mongoose.model('Product', Product);