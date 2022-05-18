const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.log(`failed to connect to mongoDB: ${err}`));