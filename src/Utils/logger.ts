import winston from "winston";

const options: winston.LoggerOptions = {
    format: winston.format.printf(info => {
        return `${info.level}: ${JSON.stringify(info.message)}`
    }),

    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new winston.transports.File({ filename: "debug.log", level: "debug" })
    ]
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;
