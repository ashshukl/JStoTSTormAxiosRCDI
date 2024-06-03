import { Service } from "typedi";
import { Customer } from "../models/Customer";
import { LoggingService } from "./LoggingService";
import { serialize } from "class-transformer";

@Service()
export class CustomersService {
  logMsg: string = "Logging from CustomersService-";

  constructor(public logger: LoggingService) {}

  get(id: number) {
    this.logger.log(this.logMsg + "getAll");
    return { msg: "No Data" };
  }

  update(id: number, customer: Customer) {
    this.logger.log(this.logMsg + "update");
    this.logger.log(JSON.stringify(customer));
    return { msg: "No Data" };
  }

  deleteCustomer(id: number) {
    this.logger.log(this.logMsg + "deleteCustomer " + id);
    return { msg: "No Data" };
  }

  getAll() {
    this.logger.log(this.logMsg + "getAll");
    return { msg: "No Data" };
  }

  create(customer: Customer) {
    this.logger.log(this.logMsg + "create");
    this.logger.log(JSON.stringify(customer));
    return { msg: "No Data" };
  }
}
