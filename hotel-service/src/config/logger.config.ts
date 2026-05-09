import winston from "winston";

const { label, timestamp, printf, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    label(),
    timestamp(),
    json(),
    printf(({ level, message, timestamp, ...meta }) => {
      const metaString = JSON.stringify(meta);
    //   console.log(metaString);
      let msgFormat = `${timestamp} [${level}]: ${message} ${metaString === "{}" ? "" :  metaString} `;

      return msgFormat;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "./logs/combined.log" }),
  ],
});



export { logger };
