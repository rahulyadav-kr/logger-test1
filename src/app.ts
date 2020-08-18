import { WinstonLogger } from "./winstonLogger";
WinstonLogger.log("warn", "", {
  message: "This is message",
  startTimeStamp: Date.now(),
  duration: "duration is 1234",
  routeName: "route name is /",
});
