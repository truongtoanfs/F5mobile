const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://dbProducts:KmQPQbfRSrGTGhC8@mastercluster.zjnes.mongodb.net/f5mobile?retryWrites=true&w=majority');
        console.log('connect to db success');
    } catch (error) {
        console.log('Error when connect to database:', error);
    }
}

module.exports = { connect };