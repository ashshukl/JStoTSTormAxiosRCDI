import { Controller, Req, Res, Get } from "routing-controllers";
import { Service } from "typedi";

@Controller("/")
@Service()
export class HomeController {
  @Get()
  getHome() {
    return "{Hurray, You have Reached HOME!!!}";
  }
}
