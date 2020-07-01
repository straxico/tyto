import express from "express";
import bodyParser from "body-parser";

// Create Express server
const app: express.Application = express();

app.set("port", process.env.PORT || 4000);
// bodyParser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
