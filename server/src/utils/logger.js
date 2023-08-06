const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  transports: [
    // new transports.File({
    //   filename: "./logs/app.log",
    //   format: format.combine(format.timestamp(), format.json()),
    // }),
    new transports.Console({
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
