import Container, { Service } from "typedi";
import {
  Middleware,
  ExpressMiddlewareInterface,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";
import { LoggingService } from "../services/LoggingService";

//In this one 
@Middleware({ type: "before" })
@Service()
export class AppBeforeMiddleware implements ExpressMiddlewareInterface {
  logger: LoggingService;

  constructor() {
    this.logger = Container.get(LoggingService);
  }

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger.log("Logging from App-Before-Middleware");
    next();
  }
}

@Middleware({ type: "after" })
@Service()
export class AppAfterMiddleware implements ExpressMiddlewareInterface {
  logger: LoggingService;

  constructor() {
    this.logger = Container.get(LoggingService);
  }

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger.log("Logging from App-After-Middleware");
    next();
  }
}

@Middleware({ type: "after" })
@Service()
export class AppErrorMiddleware implements ExpressErrorMiddlewareInterface {
  logger: LoggingService;

  constructor() {
    this.logger = Container.get(LoggingService);
  }

  error(
    error: any,
    request: any,
    response: any,
    next: (err?: any) => any
  ): void {
    this.logger.log("Logging from App-Error-Middleware");
  }
}
