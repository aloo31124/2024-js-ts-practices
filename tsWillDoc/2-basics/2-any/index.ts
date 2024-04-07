/* 
<h1>任意值 any</h1>
https://willh.gitbook.io/typescript-tutorial/basics/any

任意值Any 用來表示允許 賦值 為 任意型別 。
> ts 2-basics/2-any/index.ts

 */

console.log(" ============ <h2>什麼是 任意值 any 型別</h2> ============ ");
console.log(" => 1. 如果是一個 普通型別，在 賦值 過程中是 '不' 被允許的 改變型別 ：");
// 請撰寫範例, 並使用 typeof 檢視型別
let x11: string = "yoyo";
x11 = "haha change string";
console.log(typeof x11);
//x11 = 2;   //Type 'number' is not assignable to type 'string'

console.log(" => 2. 但如果是 any 型別，則允許被 賦值 為任意型別。 ");
// 請撰寫範例, 並使用 typeof 檢視型別
let x12: any;
x12 = "yoyo2";
console.log(typeof x12);
x12 = 4;
console.log(typeof x12);




console.log(" ============ <h2>任意值 any 的 屬性 和 方法 </h2> ============ ");
console.log(" => 1. 在 任意值any 上訪問 任何屬性 都是允許的： ");
// 實作 any 取 任意屬性
let anyThing21: any = "loulou";
console.log(anyThing21.getName);
//console.log(anyThing21.getName.getFirstName);

console.log(" => 2. any 也允許呼叫 任何方法： ");
// 實作 any 取 任意方法
let anyThing22: any = "loulou2";
//console.log(anyThing22.setName("jack"));

console.log(" => 3. 可以認為，宣告一個變數為 任意值之後， => 對它的 任何操作(屬性,方法)，返回 的內容的型別都是 任意值。 ");
// 沒實作


console.log(" ============ <h2> 未宣告型別的變數 </h2> ============ ");
console.log("1. 變數如果在宣告的時候，未指定其 型別，那麼它會被識別為 任意值型別 ：");
let anyThing31;
// let anyThing31: any; // => 等同
console.log(typeof anyThing31);
anyThing31 = "loulou";
console.log(typeof anyThing31);
anyThing31 = 2;
console.log(typeof anyThing31);



console.log("");

