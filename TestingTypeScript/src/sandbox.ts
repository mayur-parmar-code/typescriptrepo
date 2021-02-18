//       1
// const character="mayur";
// console.log(character);

// const inputs=document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(input =>{
//         console.log(input);
// });

//         2
// const no= 123;
// const str="hello";
// const bool=true;

// const cir=((num:number,no1:number) =>{
//     return num+no1;
// });

// console.log(cir(10,20));

// //          3
// //number arry
// const num=[50,20,30,40];
// num[0]=10
// console.log(num);

// //string array
// const strarr=["z","b","c"];
// strarr[0]="a";
// console.log(strarr);

// //mixed array
// const mix=["a",1,"b",2,"c",3];
// mix[6]="d";
// mix[7]=4;
// console.log(mix);

// //object
// let obj={
//     name:"may",
//     age:21
// };

// obj.name="mayur"
// obj.age=22;

// obj={
//     name:"abc",
//     age:23
//}

// //          5
// //variable
// let no:number;
// let str:string;
// let bool:boolean;

// no=10;
// str="abc";
// bool=true;

// //array
// let strarr:string[]=[];
// strarr.push("hello");
// console.log(strarr);

// //union or mixed
// let mixed:(number|string|boolean)[]=[];
// mixed.push(10);
// mixed.push("abc");
// mixed.push(true);
// console.log(mixed);

// let uid:number|string;
// uid=10;
// uid="abcsfs";
// console.log(uid);

// //object
// let obj:object;
// obj={name:"mayur",age:22};
// console.log(obj);

// //          6
// //"any" type
// let anytype:any =25;
// console.log(anytype);

// anytype="abc";
// anytype=true;
// anytype=30;
// console.log('anytype value:',anytype);

// anytype={name:"mayur",age:10};
// console.log('anytype value1:',anytype);

// let anytype1:{name:any,age:any};
// anytype1={name:10,age:"mayur"};
// console.log('anytype1 value',anytype1); //name and age type is "any" so you can give any type of value

//              8
// let greet:Function;

// greet=()=>{
//     console.log("helllo");
// }

// const add=(a:number,b:number,c:number|string)=>{
//     console.log(a+b);
//     console.log(c);
// }
// add(5,10,'5');

//          9

//          9
// type strornum= string | number;

// const logDetails=(uid:strornum,item:string)=>{
//         console.log('${item} has a uid of ${uid}');
// }

// const greet=(user:{name:string,uid:strornum})=>{
//     console.log(`${user.name} says hello`);
// }

//            10

// let cal: (a: number, b: number, c: string) => number;
// cal = (no1: number, no2: number, action :string) => {
//   if (action === "add") {
//     return no1 + no2;
//   } else {
//     return no1 - no2;
//   }
// };

// let logDetail:(user:{name:string,age:number})=>void;
// logDetail=(user:{name:string,age:number})=>{
//     console.log(`${user.name} is${user.age} years old`);
// }  


//              11
console.log("hello");




