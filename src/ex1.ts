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
}


