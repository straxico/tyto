import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync("./.env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: "./.env" });
} else {
    logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: "./.env.example" });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
if (!MONGODB_URI) {
    if (prod) {
        logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
    } else {
        logger.error("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");
    }
    process.exit(1);
}else{
    if (prod) {
        logger.info(`used MONGODB_URI =${MONGODB_URI}`);
    } else {
        logger.info(`used MONGODB_URI_LOCAL=${MONGODB_URI}`);
    }
}

export const EXIR_TOKEN = prod ? process.env["EXIR_TOKEN"] : process.env["EXIR_TOKEN_TEST"];
export const COINMARKETCAP_TOKEN = prod ? process.env["COINMARKETCAP_TOKEN"] : process.env["COINMARKETCAP_TOKEN_TEST"];

