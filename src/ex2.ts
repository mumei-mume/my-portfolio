export function ex2() {
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
  console.log(x % y);

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

}
