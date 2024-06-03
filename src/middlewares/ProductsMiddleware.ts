import { ExpressMiddlewareInterface } from "routing-controllers";
import { LoggingService } from "../services/LoggingService";
import Container, { Inject, Service } from "typedi";

//Since Middleware is also a service then in that case dependencies can be property injected in middleware using @Inject
@Service()
export class ProductsBeforeMiddleware implements ExpressMiddlewareInterface {
  @Inject()
  logger?: LoggingService;

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger?.log("Logging from Products-Before-Middleware");
    next();
  }
}

@Service()
export class ProductsAfterMiddleware implements ExpressMiddlewareInterface {
  @Inject()
  logger?: LoggingService;

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger?.log("Logging from Products-After-Middleware");
    next();
  }
}

@Service()
export class ProductsBeforeCreateMiddleware
  implements ExpressMiddlewareInterface
{
  @Inject()
  logger?: LoggingService;

  use(request: any, response: any, next: (err?: any) => any) {
    this.logger?.log("Logging from Products-BeforeCreate-Middleware");
    next();
  }
}
