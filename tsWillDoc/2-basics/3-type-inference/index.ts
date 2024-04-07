/* 
<h1> 型別推論 type inference </h1>
https://willh.gitbook.io/typescript-tutorial/basics/type-inference

> tsc 2-basics/3-type-inference/index.ts

*/

console.log(" ========== <h2>什麼是型別推論</h2> ========== ");
console.log(" 如果沒有明確的指定型別，那麼 TypeScript 會依照 型別推論（Type Inference）規則 推斷 出一個型別。 ");
// 無實作

console.log(" ========== <h2>定義 有 賦值</h2> ========== ");
console.log("1. 以下程式碼雖然沒有 指定型別，但是會在編譯的時候報錯：");
console.log("2. TypeScript 會在沒有明確的指定型別的時候推測出一個型別，這就是型別推論。");
// 請實作
let x1 = "loulou";
// 同 let x1: string = "loulou"
//x1 = 3; // 報錯誤: Type 'number' is not assignable to type 'string'.

console.log(" ========== <h2>定義 沒 賦值</h2> ========== ");
console.log(" 如果定義的時候沒有賦值，不管之後有沒有賦值， 都會被推斷成 any 型別而完全不被型別檢查：");
// 請實作
let x2; // => 被 型別推論成 any
x2 = "jack";
x2 = 3;



console.log("");



