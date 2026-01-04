export function ex5() {
  //04-04.関数
  // 8.1.1文字列を受け取って "Hello, [名前]!" を返す関数を作成してください。
  function greet (name: string): string {
    return `Hello, ${name}!`;
  }
  console.log(greet("名前"));
  // 8.1.2 2つの数値を受け取り、和を返す関数を作成してください。
  function sum(a:number, b:number): number {
    return a + b;
  }
  console.log(sum(1, 2));
  // 8.2.1 オプション引数を使って、age を省略可能にした関数を作成してください。
  function introduce(name: string, age?: number): string {
    if (age !== undefined) {
      return `私の名前は${name}で、年齢は${age}歳です。`;
    } else {
      return `私の名前は${name}です。`;
    }
  }
  console.log(introduce("Alice", 25));
  console.log(introduce("Bob"));
  // 8.2.2 デフォルト引数を使って、message が指定されなかった場合 "No message" を返す関数を作成してください。
  function mail(message: string = "No message"): string {
    return message
  }
  console.log(mail("Hello"));
  console.log(mail());
  // 8.3.1 可変長引数を使って、引数の合計を計算する関数を作成してください。
  function total(...numbers: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(total(1, 2, 3, 4, 5));
  console.log(total(10, 20, 30)); 
  // 8.3.2 型ガード関数を使って、引数が string の場合は大文字に、number の場合は 2 倍にする関数を作成してください。
  function isString(input: unknown): input is string {
    return typeof input === "string";
  }

  function transform(input: string | number): string | number {
    if (isString(input)) {
      return input.toUpperCase();
    } else {
      return input * 2;
    }
  }
  console.log(transform("hello")); // 大文字に変換される
  console.log(transform(10));      // 2倍になる

  // 大文字にするメソッドは[string型の変数].toUpperCase()で取得できます。


}

