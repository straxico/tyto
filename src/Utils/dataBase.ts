import mongoose from "mongoose";
import { MONGODB_URI } from "./secrets";
import bluebird from "bluebird";

const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;
mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to database"))
    .catch(err => {
        console.log("MongoDB connection error:" + err);
        process.exit();
    });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
});
export default mongoose