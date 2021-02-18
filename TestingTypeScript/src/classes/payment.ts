import { hasFormatter } from "../interfaces/hasFormatter.js";

export class payment implements hasFormatter {
  //   client: string;
  //   details: string;
  //   amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  // or u can also use like this below in define property in constructor
  
 constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} owed ${this.amount} for ${this.details}`;
  }
}