import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./src/routes/crm.Routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// mongoose connection
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});


//body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
    res.send("Hello😁 Welcome University API!");
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});