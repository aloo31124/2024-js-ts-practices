// > tsc 2-basics/1-primitive/index.ts  
console.log("  ========== <h2>布林值 boolean</h2> ==========  ");
console.log(" 1. 布林值 boolean 是最基本的型別, 直接存入 ");
var b1 = true;
console.log(b1);
console.log(" 2. 但 new 一個 建構函式 的 Boolean 不是 \"布林值\" 是一個 \"布林物件\" ");
var b2 = new Boolean(1);
var b3 = new Boolean(0);
console.log(b2);
console.log(b3);
console.log(" 3. 布林值boolean 與 布林物件Boolean 兩者不同(大小寫也不同) => string, number 也有一樣特性, 不贅述");
console.log("  ========== <h2>數值 number</h2> ==========  ");
console.log(" 1. 補充: 二, 八進位 ts 轉乘 js 時, 轉成 十進位");
var decLiteral = 6;
var notANumber = NaN;
var infinityNumber = Infinity;
var hexLiteral = 0xf00d;
// ES6 中的二進位制表示法
var binaryLiteral = 10;
// ES6 中的八進位制表示法
var octalLiteral = 484;
console.log(" 2. js 經典題: 01 + 0.2 = ? ts 會如何呢? ");
var number1 = 0.1 + 0.2;
console.log(number1);
console.log("  ========== <h2>字串 string</h2> ==========  ");
console.log(" 1. ts 多出了 ${ .. } 功能, 可串組字串 ");
var userName = "盧帥翔";
var hello = "你好啊:) ";
console.log("\u6211\u662F ".concat(userName, " \u5F88\u9AD8\u8208\u8A8D\u8B58\u4F60 ").concat(hello));
console.log("  ========== <h2>空值void</h2> ==========  ");
console.log(" 1. js 沒有 空值void 的概念");
// 略
console.log(" 2. ts 有, 可將無任何回傳的函式 回傳 void, => ex");
// 實作 fun 印出 void
function loggingMessage() {
    console.log("yoyo logging message ");
}
// 印出結果為何？
console.log(loggingMessage());
console.log(" 3. ts 對變數賦值 void 沒意義, 因為只能存入 null, undefined ");
var v;
v = undefined;
v = null; // Type 'null' is not assignable to type 'void'.ts(2322)
console.log(v);
//v = 8; // Type 'number' is not assignable to type 'void'
console.log("  ========== <h2>null, undefined</h2> ==========  ");
console.log(" 1. null, 與 undefined 為 任何型別的 \"子型別\" ，因此可(存入)賦值 number, string => 但 void 無法");
var n1 = 0;
var s1 = "yoyo";
n1 = undefined;
s1 = undefined;
console.log(n1);
console.log(s1);
n1 = null;
s1 = null;
console.log(n1);
console.log(s1);
