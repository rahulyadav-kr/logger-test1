const winston = require("winston");
const Transport = require("winston-transport");
const fs = require("fs");
class ConsoleTransport extends Transport {
  log(message: any) {
    console.log(message);
    switch (message.level) {
      case "info":
        console.log(message);
        break;

      case "error": {
        console.error(message);
        break;
      }
      case "warn":
        console.warn();
    }
  }
}
class FileTransport extends Transport {
  log(message: any) {
    const data = message.message;
    fs.writeFile(
      "log.txt",
      data + "   " + message.startTimeStamp + "   " + message.duration,
      "utf8",
      () => {}
    );
  }
}
export const WinstonLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.json(),
    winston.format.colorize()
  ),
  transports: [new ConsoleTransport(), new FileTransport()],
});
// comment added to test
// comment to test merge
