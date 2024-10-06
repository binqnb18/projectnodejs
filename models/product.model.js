const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({ 
    title: String,
    description: String, // Đã sửa lỗi từ "desciption" thành "description"
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean  
});

const Product = mongoose.model('Product', productSchema, "products");

module.exports = Product;
