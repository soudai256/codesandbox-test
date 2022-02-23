/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("きんたま");

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc =(num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);

// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5];
// const [num1,num2,...arr3] =arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// console.log(arr5);

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 =arr4;
// console.log(arr8);
// arr8[0] =100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "うんこ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr.map((name, index) => console.log(name));
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num%2 ===0;
// })
// console.log(newNumArr);

/**
 * 三項演算子
 */
//ある条件　？　条件がtrueの時：条件がfalseの時

// const vall = 1<0 ? "trueです" : "falseです";
// console.log(vall);

// const num = 1300;

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//&& は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "ナニカ設定されました";
console.log(fee2);
