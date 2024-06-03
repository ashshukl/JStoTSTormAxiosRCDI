import { Service } from "typedi";

@Service()
export class LoggingService {
  log(message: string = "") {
    console.log(message);
  }
}
