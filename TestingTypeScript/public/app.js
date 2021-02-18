// interface Isperson{
//   name: string;
//   mobile: number;
//   email: string;
//   age: number;
//   //persion():any;
//   dis(): any;
// }
// let persionOne: Isperson = {
//   name: "mayur",
//   mobile: 123456789,
//   email: "m@gmail.com",
//   age: 21,
//   dis() {
//     return console.log(this.name, this.mobile, this.email, this.age);
//   },
// };
import { Invoice } from "./classes/Invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payment.js";
// let docOne=new Invoice("mayur","this is details",100);
// console.log(docOne);
// const inv1 = new Invoice("mayur", "this is for design work", 100);
// const invoices: Invoice[] = [];
// invoices.push(inv1);
// invoices.forEach((inv) => {
//   console.log(inv.format());
// });
//==================================================================
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //   console.log(doc);
});
// const adduid=<T>(obj:T)=>{
//       let uid=Math.floor(Math.random()*10);
//       return {...obj,uid};
//   }
//   let docOne=adduid({name:'mayur',age:22});
//   console.log(docOne);
/*
Index types and index signatures
*/
// interface Dictionary<T> {
//       [key: string]: T;
//     }
//     let keys: keyof Dictionary<number> = 5;
//     let value: Dictionary<number> = { num: 1 };
//     console.log("key is::",keys);
//     console.log("value is::",value);
