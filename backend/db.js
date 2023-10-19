const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://jainprak007:HArsh@cluster0.ptursrz.mongodb.net/voulenteer_data?retryWrites=true&w=majority';

//connect to mongo    
const connectToMongo = () => {
    mongoose.set('strictQuery', false);
    // console.log(mongoURI); // Print the URI for verification
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }).then(() => console.log("Database connected!", mongoURI)).catch(err => console.log(err));
}

module.exports = connectToMongo;