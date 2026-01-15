export function ex20260115() {
  // 課題1
  // "Alice", "Bob", "Charlie" の要素を持つ配列を型注釈付きで宣言してください。
  // そこから "Charlie" を取り出してコンソールに出力してください。

  const array1: string[] = ["Alice", "Bob", "Charlie"];
  console.log(array1[2]);

  // 課題2
  // 下の array2 の要素のうち、89 のインデックスをコンソールに出力してください。
  // array2 の宣言はコピペして使ってください。

  const array2: number[] = [
    72, 19, 97, 9, 16, 65, 10, 1, 93, 73, 17, 91, 98, 3, 18, 67, 99, 0, 77, 64,
    96, 20, 75, 94, 23, 66, 21, 22, 2, 92, 82, 90, 78, 74, 95, 89, 26, 88, 76,
    83, 24, 79, 29, 5, 4, 70, 68, 81, 25, 71, 69, 7, 80, 84, 6, 85, 8, 28, 27,
    86, 87, 31, 11, 30, 12, 13, 14, 15, 43, 32, 35, 42, 33, 41, 40, 45, 44, 46,
    47, 34, 36, 37, 39, 38, 48, 49, 51, 50, 52, 53, 54, 55, 57, 56, 58, 59, 60,
    63, 61, 62,
  ];

  console.log(array2.indexOf(89));

  // 課題3
  // pop, push, shift, unshift を使って、array3 の要素を ["花子さん", "は", "背が低い", "わけでは無い"] に書き換え、コンソールに出力して下さい。
  // array3 の宣言はコピペして使ってください。

  const array3: string[] = ["山田さん", "は", "背が高い"];
  array3.pop();
  array3.push("背が低い");
  array3.push("わけでは無い");
  array3.shift();
  array3.unshift("花子さん");

  console.log(array3);

  // チャレンジ課題
  // 課題2 の array2 は、「0 ~ 99までの整数を重複なくランダムに並べた配列」です。これを生成するコードを書いてください。

  //回答方針
  //1.0~99の整数を順番に並べた配列を用意する。
  //2.配列の要素をランダムに入れ替える。

  //1を実装
  const array4: number[] = [];
  for (let i = 0; i < 100; i++) {
    array4.push(i);
  }
  //2を実装
  for (let i = 99; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0〜iまでのランダムな整数を生成
    const temp = array4[i]; //配列を入れ替える（swap）
    array4[i] = array4[j]; 
    array4[j] = temp; 
  }
  console.log(array4);

  //whileで書く場合
  
  const array5: number[] = [];
  for (let i = 0; i < 100; i++) {
    array5.push(i);
  }

  let i = 99;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1)); // 0〜iまでのランダムな整数を生成
    const temp = array5[i]; //配列を入れ替える（swap）
    array5[i] = array5[j];
    array5[j] = temp;
    i--;
  }
  console.log(array5);

}
