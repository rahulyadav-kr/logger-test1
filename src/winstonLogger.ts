 const winston = require ('winston')
 const Transport = require ("winston-transport")
 const fs = require ('fs')
class ConsoleTransport extends Transport {
  log(message:any) {
    console.log(message)
    switch (message.level) {
      case 'info':
        console.log(message);
        //console.log("info is running")
        break
      
      case 'error':{
        console.error(message)
        break
      }
      case 'warn':
        console.warn();
        break
        // default:
        //   console.log(message)

     
    }
  }
}
class FileTransport extends Transport{
  log(message: any) {
    const data = message.message
  fs.writeFile('log1.txt', data+"   "+message.startTimeStamp+"   "+message.duration , 'utf8',()=>{} );
}
}
export const WinstonLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.json(),winston.format.colorize()),
  transports: 
  [new ConsoleTransport(),
   new FileTransport()
  ],
})


