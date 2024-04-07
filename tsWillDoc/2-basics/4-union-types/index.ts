/*
    <h1>聯合型別</h1>
    https://willh.gitbook.io/typescript-tutorial/basics/union-types
    聯合型別（Union Types）表示取值可以為多種型別中的一種。 
    > tsc 2-basics/4-union-types/index.ts
*/

console.log(" ============================== <h2>簡單的例子</h2> ============================== ");
console.log("1. 聯合型別使用 | 分隔每個型別。");
console.log("2. 請實作，允許 myFavoriteNumber 的型別是 string 或者 number，但是不能是其他型別。");
// 請實作
let myFavoriteNumber: number|string  = "yoyo!";
console.log(myFavoriteNumber);
myFavoriteNumber= 7;
console.log(myFavoriteNumber);


console.log(" ============================== <h2>存取 聯合型別的 屬性或方法</h2> ============================== ");
console.log("1. 當 TypeScript 不確定一個聯合型別的變數到底是哪個型別的時候，=> 我們只能存取此 聯合型別 的所有型別裡 \"共有\" 的 屬性或方法：");
// 不用實作

console.log("2. length 是否為 string 和 number 的共有屬性？");
function getLength(somthing: number|string){
    //console.log(somthing.length);
    //Property 'length' does not exist on type 'string | number'.
}
getLength(87);

console.log("3. length 不是 string 和 number 的共有屬性，所以會報錯。");

function getString(somthing: number|string) {
    console.log(somthing.toString());
}
getString(777);


console.log(" ==============================  ============================== ");
console.log("");
console.log("");


