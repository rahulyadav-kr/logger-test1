import winston =  require('winston')
import Transport = require ("winston-transport")

class CustomTransport extends Transport {
  log(message: any) {
    switch (message.level) {
      case "info":{
        console.log(message);
        console.log("info is running")
        break;
      }
      case "error":
        console.error(message);
        break;
      case "warn":
        console.warn();
        break;
      default:
        console.log(message);
    }
  }
}

export const WinstonLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new CustomTransport()],
  // transports: new winston.transports.File({
  //   filename: 'log.text'
  // })
})

export const createWinstonLogger = () => WinstonLogger;

