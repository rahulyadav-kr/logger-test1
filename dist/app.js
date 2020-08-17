"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const logger = _1.createWinstonLogger();
logger.log('info', 'hi', {
    message: 'server is running on : http//3000',
    startTimeStamp: Date.now(),
    duration: 1234,
    //level: LogLevel.Info,
    routeName: '/'
});
