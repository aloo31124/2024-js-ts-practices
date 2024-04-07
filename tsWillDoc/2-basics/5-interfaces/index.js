/*
<h1>物件的型別——介面</h1>
https://willh.gitbook.io/typescript-tutorial/basics/type-of-object-interfaces
在 TypeScript 中，我們使用介面（Interfaces）來定義物件的型別。
> tsc 2-basics/5-interfaces/index.ts
*/
/*
<h2>什麼是介面</h2>
1. 在物件導向程式語言中，介面（Interfaces）是一個很重要的概念，它是對行為的一種抽象，而具體如何行動則需要由類別（classes）去實現（implement）。
2. TypeScript 中的介面是一個非常靈活的概念，除了可用於對類別的一部分行為進行抽象以外，也常用於對「物件的形狀（Shape）」進行描述。

*/
console.log(" ==================== <h2>tom, person 實作介面, 形狀是否一至？</h2> ==================== ");
console.log(" 1. 定義了一個介面 Person，接著定義了一個變數 tom，它的型別是 Person。這樣，=> 我們就約束了 tom 的形狀必須和介面 Person 一致。 請實作 ");
var Tom1_1 = {
    name: "tom1_1",
    age: 20,
};
console.log(Tom1_1.name);
console.log(" 2. 介面一般首字母大寫。有的程式語言中會建議介面的名稱加上 I 字首。 "); // 略
console.log(" 3. 定義的變數 是否可比介面少了一些屬性？ 或者 多一些屬性？ 請實作 ");
// 請實作
/*
    ===========================================
    <h1>請簡述 介面中 可選,任意,唯獨屬性 之三者差異</h1>
    => 請回想一下 :)
 */
console.log(" ==================== <h2>可選屬性</h2> ==================== ");
console.log("1. 有時我們希望不要完全匹配一個形狀，那麼可以用可選屬性 (?) => 可選屬性的含義是該屬性可以不存在。請實作");
var Tom1_2 = {
    name: "tome 1_2",
};
console.log(Tom1_2.name);
console.log("2. 承上，這時仍然不允許新增未定義的屬性, 請實作");
// 先略
console.log(" ==================== <h2>任意屬性</h2> ==================== ");
console.log("1. 希望一個介面允許有任意的屬性，使用 [*: string] 定義了任意屬性取 string 型別的值。請實作 ");
var Tom1_3 = {
    name: "tom1_3",
    age: 22,
    garden: "mam",
};
console.log(Tom1_3);
console.log("2. 需要注意的是，一旦定義了任意屬性，那麼確定屬性和可選屬性的型別都必須是它的型別的子集 ");
// 請實作, 先略
console.log(" ==================== <h2>唯獨屬性 readonly</h2> ==================== ");
console.log("1. 有時候我們希望物件中的一些欄位只能在建立的時候被賦值，那麼可以用 readonly 定義唯讀屬性, 請實作id");
console.log("2. 注意：唯讀的約束存在於第一次給「物件」賦值的時候，而不是第一次給「唯讀屬性」賦值的時候, 請實作");
console.log(" ====================  ==================== ");
console.log("");
console.log("");
console.log("");
console.log("");
