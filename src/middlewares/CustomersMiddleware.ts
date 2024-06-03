import { ExpressMiddlewareInterface } from "routing-controllers";
import { LoggingService } from "../services/LoggingService";
import Container, { Service } from "typedi";

//Since middleware is also a @Service dependencies can be Constructor Injected with or without @Inject
@Service()
export class CustomerBeforeMiddleware implements ExpressMiddlewareInterface {
  constructor(public logger: LoggingService) {}

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger.log("Logging from Customers-Before-Middleware");
    next();
  }
}

@Service()
export class CustomerAfterMiddleware implements ExpressMiddlewareInterface {
  constructor(public logger: LoggingService) {}

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger.log("Logging from Customers-After-Middleware");
    next();
  }
}

@Service()
export class CustomerDeleteMiddleware implements ExpressMiddlewareInterface {
  constructor(public logger: LoggingService) {}

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger.log("Logging from Customers-Delete-Middleware");
    next();
  }
}
