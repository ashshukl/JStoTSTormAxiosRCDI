import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  UseBefore,
  UseAfter,
  Body,
  Param,
} from "routing-controllers";
import {
  CustomerAfterMiddleware,
  CustomerBeforeMiddleware,
  CustomerDeleteMiddleware,
} from "../middlewares/CustomersMiddleware";
import { Customer } from "../models/Customer";
import { plainToClass, serialize } from "class-transformer";
import { CustomersService } from "../services/CustomersService";
import { Container, Inject, Service } from "typedi";
import { LoggingService } from "../services/LoggingService";

@Controller("/customers")
@UseBefore(CustomerBeforeMiddleware)
@UseAfter(CustomerAfterMiddleware)
@Service()
export class CustomersController {
  logMsg: string = "Logging from CustomersController-";

  //Since controller is decorated with @Service we are getting dependencies injected in the constructor WITH and WITHOUT @Inject. What's the difference?!
  constructor(
    @Inject() public customersSvc: CustomersService,
    public logger: LoggingService
  ) {}

  @Get("/:id")
  get(@Param("id") id: number) {
    this.logger.log(this.logMsg + "getAll");
    return this.customersSvc?.get(id);
  }

  @Put("/:id")
  update(@Param("id") id: number, @Body() customerJSON: any) {
    let customer: Customer = plainToClass(Customer, customerJSON);
    this.logger.log(this.logMsg + "update");
    this.logger.log(JSON.stringify(customer));
    return this.customersSvc?.update(id, customer);
  }

  @Delete("/:id")
  @UseBefore(CustomerDeleteMiddleware)
  deleteCustomer(@Param("id") id: number) {
    this.logger.log(this.logMsg + "delete" + id);
    return this.customersSvc?.deleteCustomer(id);
  }

  @Get()
  getAll() {
    this.logger.log(this.logMsg + "get");
    return this.customersSvc?.getAll();
  }

  @Post()
  create(@Body() customerJSON: any) {
    let customer: Customer = plainToClass(Customer, customerJSON);
    this.logger.log(this.logMsg + "create");
    this.logger.log(JSON.stringify(customer));
    return this.customersSvc?.create(customer);
  }
}
