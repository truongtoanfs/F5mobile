const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f5mobile_dev');
        console.log('connect to db success');
    } catch (error) {
        console.log('Error when connect to database:', error);
    }
}

module.exports = { connect };