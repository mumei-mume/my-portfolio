export function ex2() {
// 04-03.条件分岐と繰り返し
// 3.1.1
// if 文を使って、変数 num の値が正の数なら "正の数", 負の数なら "負の数", 0 なら "ゼロ" を表示してください。
const num:number = 5;

if (num === 0) {
  console.log("zero");
} else if (num > 0) {
  console.log("正の数");
} else {
  console.log("negative 負の数");
};

// 3.1.2
// for ループを使って、1 から 10 までの数字をコンソールに表示してください。

for (let i = 1; i <= 10; i++) {
  console.log(i);
};


// 3.2.1
// switch 文を使って、入力された曜日の番号 (1 から 7) に応じた曜日名を表示してください。
let dayNumber: number = 3;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("1から7の数字を入力してください");
    break;
}

// 3.2.2
// while ループを使って、5 から 1 までカウントダウンを表示してください。

let count: number = 5;
while (count >= 1) {
  console.log(count);
  count--;
}


// 3.3.1
// for-of ループを使って、数値の配列 [3, 6, 9, 12] の合計を計算してください。

const numArray:number[] = [3, 6, 9, 12];
let sum:number = 0;

for (const n of numArray) {
  sum += n;
}
console.log("合計:", sum);

// 3.3.2
// for-in ループを使って、オブジェクト { name: "Bob", age: 30, city: "Tokyo" } のすべてのプロパティと値をコンソールに表示してください。

const obj : {
  name: String;
  age: Number;
  city: String;
} = {
  name: "Bob",
  age: 30,
  city: "Tokyo"
}
for (const key in obj) {
  console.log(`${key}: ${obj[key as keyof typeof obj]}`);
}

}
