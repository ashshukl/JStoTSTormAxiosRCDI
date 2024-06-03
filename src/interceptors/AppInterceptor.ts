import { Interceptor, InterceptorInterface, Action } from "routing-controllers";
import { Inject, Service } from "typedi";
import { LoggingService } from "../services/LoggingService";

@Service()
@Interceptor()
export class AppInterceptor implements InterceptorInterface {
  msgStr: string = "Logging from AppInterceptor";

  @Inject()
  logger?: LoggingService;

  intercept(action: Action, result: any) {
    this.logger?.log(this.msgStr);
    return result;
  }
}
