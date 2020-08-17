import {createWinstonLogger} from '.'
const logger = createWinstonLogger();
logger.log('info', 'hi',{
    message: 'server is running on : http//3000',
    startTimeStamp: Date.now(),
    duration: 1234,
    //level: LogLevel.Info,
    routeName: '/'
})
