import { Inject, Service } from "typedi";
import { LoggingService } from "./LoggingService";

@Service()
export class ProductsService {
  msgStr: string = "Logging from ProductsService-";

  @Inject()
  logger?: LoggingService;

  getAll() {
    this.logger?.log(this.msgStr + "getAll");
    return { output: "Test Data - getAll" };
  }

  getById(id: number) {
    this.logger?.log(this.msgStr + "getById");
    return { output: "Test Data - getById" };
  }

  create(body: any) {
    this.logger?.log(this.msgStr + "create");
    return { output: "Test Data - create" };
  }

  deleteProduct(id: number) {
    this.logger?.log(this.msgStr + "deleteProduct");
    return { output: "Test Data - deleteProduct" };
  }
}
