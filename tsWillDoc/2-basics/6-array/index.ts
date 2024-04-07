/* 
<h1>陣列的型別</h1>
https://willh.gitbook.io/typescript-tutorial/basics/type-of-array
<br>
在 TypeScript 中，陣列型別有多種定義方式，比較靈活。
<br>

> tsc 2-basics/6-array/index.ts


*/



console.log(" ==================== <h2>(常用)型別+方括弧[]</h2> ==================== ");
console.log(" 最簡單的方法是使用「型別 + 方括號」來表示陣列：=> 請實作初始 ");
// 請實作
let array1_1: number[] = [1, 2, 4, 5];
console.log(array1_1);

console.log(" 陣列的項中不允許出現其他的型別：=> 請實作初始 ");
// 請實作
//let array1_2: number[] = [1, 2, "3", 4];
//Type 'string' is not assignable to type 'number'

console.log(" 陣列的一些方法的引數也會根據陣列在定義時約定的型別進行限制：=> push 方法只允許傳入 number 型別的引數，但是卻傳了一個 '8' 型別的引數，所以報錯了。,實作 ");
// 請實作
let array1_3: number[] = [1, 3, 4];
array1_3.push(87);
// array1_3.push("5"); //Argument of type 'string' is not assignable to parameter of type 'number'.t
console.log(array1_3);



console.log(" ==================== 泛型陣列 ==================== ");
console.log(" 我們也可以使用陣列泛型（Array Generic） Array<elemType> 來表示陣列：請實作 ");
let array2_1: Array<number> = [5, 3, 2, -1];
console.log(array2_1);


console.log(" ==================== 介面陣列 ==================== ");
console.log(" 介面也可以用來描述陣列： => 如下開始實作 ");
console.log(" 實作提示=> array3_1_inter (NumberArray) 表示：只要索引的型別是數字時，那麼值的型別必須是數字。 [index: number] ");
// 請實作
interface array3_1_inter {
    [index:number] : number
}

let array3_1: array3_1_inter = [-1, 3, 5 ];
console.log(array3_1);



console.log(" 效果:雖然介面也可以用來描述陣列，但是我們一般不會這麼做，因為這種方式比前兩種方式複雜多了。 ");
console.log(" => 不過有一種情況例外，那就是它常用來表示 類別陣列。 ");


console.log(" ==================== 類別陣列 ==================== ");
console.log(" 類別陣列（Array-like Object）不是 陣列型別 ，比如 arguments： ");
function sum1_1() {
    //let args: number[] = arguments;
}

console.log(" 實作提示：在這個例子中，我們除了約束當索引的型別是數字時，值的型別必須是數字之外，也約束了它還有 length 和 callee 兩個屬性。=> 請實作 ");
function sum1_2() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}


console.log("  ");
console.log("  ");
// 請實作


console.log(" ====================  ==================== ");
console.log("  ");
console.log("  ");
console.log("  ");
console.log("  ");
// 請實作




