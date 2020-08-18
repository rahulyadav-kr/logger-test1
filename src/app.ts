import {WinstonLogger} from "./winstonLogger"
// console.log('%cconsole.log', 'color: green;');
// console.info('%cconsole.info', 'color: green;');
// console.debug('%cconsole.debug', 'color: green;');
// console.warn('%cconsole.warn', 'color: green;');
// console.error('%cconsole.error', 'color: green;');
WinstonLogger.log('error', 'error',{
    message: 'This is message',
    startTimeStamp: Date.now(),
    duration: 1234,
   // level: Level.Info,
    routeName: '/'
})


