export class Invoice {
    //   client: string;
    //   details: string;
    //   amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    // or u can also use like this below in define property in constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes RS.${this.amount} for ${this.details}`;
    }
}
