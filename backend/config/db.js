const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongoose.set('strinctQuery', false);
        // const url = process.env.MONGO_URI
        mongoose.connect(process.env.MONGO_URI,{}
        );
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;