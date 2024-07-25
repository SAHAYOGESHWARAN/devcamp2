const mongoose = require('mongoose');

const connectDB = async () => {
   
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useNewUrlIndex: true,
            useFindAndModify:false,
            useUnifiedTopology: true // This option is recommended
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
 
};

module.exports = connectDB;
