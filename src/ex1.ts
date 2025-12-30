export function ex1() {
  // 04-01.値・型・変数
  // 演習問題
  // 4.1.1
  // 数値型の変数 count を宣言して、値 10 を代入してください。
  const count: number = 10;
  console.log(count);

  // 4.1.2
  // 文字列型の変数 greeting を宣言して、値 "こんにちは" を代入してください。
  const greeting: string = "こんにちは";
  console.log(greeting);

  // 4.2.1
  // ユニオン型を使用して、数値または文字列を持てる変数 data を宣言し、
  // それぞれの値を代入してください。

  let date: string | number;
  date = 12;
  console.log(date);
  date = "月";
  console.log(date);
  date = 12 + "月" + 1 + "日";
  console.log(date);
  date = `12月1日`;
  console.log(date);

  // 4.2.2
  // 型エイリアスを使って User 型を定義し、
  // name と age を含むオブジェクトを作成してください。

  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "太郎",
    age: 20,
  };

  console.log(user);

  // 算術演算子
  // 3.1.1
  // 変数 x = 20 と y = 4 を使って、
  // それらの加算、減算、乗算、除算、剰余を計算し、
  // 結果をコンソールに表示してください。

  const x: number = 20;
  const y: number = 4;
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);

  // 3.2.1
  // ユーザーが入力した 2 つの数値の和と積を計算する関数を作成してください。
  function sumProduct(a: number, b: number) {
    return {
      sum: a + b,
      product: a * b,
    };
  }
  const result = sumProduct(123, 456);
  console.log(result.sum);
  console.log(result.product);

  // 3.2.2
  // 変数 base = 3、exponent = 4 を使って、累乗を計算してください。

  const base: number = 3;
  const exponent: number = 4;
  console.log(base ** exponent);

  // 3.3.1
  // 2つの数値を受け取り、大きい方を返す関数を作成してください。
  function getMax(p: number, q: number) {
    if (p > q) {
      return p;
    } else {
      return q;
    }
  }
  const judgement = getMax(15, 20);
  console.log(judgement);

  const judgement1 = getMax(10, 5);
  console.log(judgement1);

  // 3.3.2
  // 10 から 50 までの数値の合計を計算するプログラムを作成してください。

  let sum1: number = 0;

  for (let i = 10; i <= 50; i++) {
    sum1 += i;
  }
  console.log(sum1);

  let sum2: number = 0;
  let index: number = 10;

  while (index <= 50) {
    sum2 += index;
    index++;
  }
  console.log(sum2);

  // 04-02.配列・オブジェクト
// 4.1.1
// 数値の配列 numbers を作成し、要素を 3 つ追加してください。

const numbers:number[] =[1, 2, 3];
console.log(numbers);

// 4.1.2
// オブジェクト person を作成し、name と age のプロパティを持たせてください。

const person: {
  name: string,
  age: number,
}= {
  name:"Alice",
  age: 26,
}

console.log(person);

// 4.2.1
// readonly を使用して、変更できない配列を作成してください。

const arr:readonly number[] = [100, 200, 300];
console.log(arr);

// arr.push(400); エラーになる


// 4.2.2
// type を使用して Car 型を作成し、brand と year のプロパティを持つオブジェクトを定義してください。

type Car = {
  brand: string;
  year: number;
};

const Aqua: Car = {
  brand: "Toyota",
  year: 2011,
}

console.log(Aqua);

// 4.3.1
// 配列のスプレッド構文を使用して、2 つの配列を結合してください。

const arr1:number[] = [1, 2, 3];
const arr2:number[] = [4, 5, 6];

const arrJoin:number[] = [...arr1, ...arr2]

console.log(arrJoin);

// 4.3.2
// オブジェクトの分割代入を使用して、name と age の値を取得してください。

const obj: {
    name: string;
    age: number;
}  = {
  name: "アリス",
  age: 30,
}
const { name, age } = obj;

console.log(name);
console.log(age);

}


