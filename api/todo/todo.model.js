const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://higashinkn216:test216@cluster0-ezd0i.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('todo', todoSchema);