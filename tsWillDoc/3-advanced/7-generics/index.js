// https://willh.gitbook.io/typescript-tutorial/advanced/generics
// > tsc 3-advanced/7-generics/index.ts
//////////////////////////////////////////////////////////////////////////
console.log(" ============= <h2>範例1: 簡單的陣列 any 範例</h2> ============= ");
console.log(" => 1. 新增一個創建陣列的函式, ");
console.log(" => 2. 有兩個參數: 1. 指定該陣列長度 2. 陣列給個初始值");
function createArray1(length, defaul) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = defaul; //報錯: Type 'any' is not assignable to type 'never'.ts
    }
    return result;
}
console.log(createArray1(3, "yo1"));
//////////////////////////////////////////////////////////////////////////
console.log(" ============= <h2>範例2: any 改 T 泛型</h2> ============= ");
function createArray2(length, defaul) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = defaul; //報錯: Type 'any' is not assignable to type 'never'.ts
    }
    return result;
}
console.log(createArray2(5, "yo2-1"));
// 型別推論亦可判斷為 string
console.log(createArray2(4, "yo2"));
//////////////////////////////////////////////////////////////////////////
console.log("============= 範例3: swap置換範例, 可多個泛型引數 =============");
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, "swap1"])); // (2) ['swap1', 7]
//////////////////////////////////////////////////////////////////////////
console.log(" ============= <h2>泛型約束</h2> ============= ");
function loggingArray(arr) {
    console.log(arr.length);
    return arr;
}
var arr1 = [1, 4, "yo"];
loggingArray(arr1);
//////////////////////////////////////////////////////////////////////////
