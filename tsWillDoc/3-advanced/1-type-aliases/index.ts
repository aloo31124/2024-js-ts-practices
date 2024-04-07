/*

    <h1>型別別名 type aliases</h1>
    https://willh.gitbook.io/typescript-tutorial/advanced/type-aliases
    <br>
    > tsc 3-advanced/1-type-aliases/index.ts 
    <br>
  
 */


console.log(" ==================== <h1>型別別名 type aliases</h1> ==================== ");
console.log(" 型別別名用來給一個 型別 起個 新名字 ~ :) 。 ");
console.log(" 實作提示: 我們使用 type 建立型別別名。 ");
// 請實作
type Name = string;
type NameResolver = () => string;

console.log(" 實作提示:型別別名常用於聯合型別。 ");
// 請實作
type NameOrResolver = Name | NameResolver;

console.log("  ");
// 請實作

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

console.log(getName("loulou"));
console.log(getName(String("yoyo")));


