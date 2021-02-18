import { hasFormatter } from "../interfaces/hasFormatter.js";

export class Invoice implements hasFormatter {
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
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes RS.${this.amount} for ${this.details}`;
  }
}