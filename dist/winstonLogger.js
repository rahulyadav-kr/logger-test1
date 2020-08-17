"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWinstonLogger = exports.WinstonLogger = void 0;
const winston = require("winston");
const Transport = require("winston-transport");
class CustomTransport extends Transport {
    log(message) {
        switch (message.level) {
            case "info": {
                console.log(message);
                console.log("info is running");
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
exports.WinstonLogger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [new CustomTransport()],
});
exports.createWinstonLogger = () => exports.WinstonLogger;
