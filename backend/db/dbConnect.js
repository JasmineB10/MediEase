const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const mongourl = 'mongodb://127.0.0.1:27017/HMS_DB';

mongoose.connect(mongourl)
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

