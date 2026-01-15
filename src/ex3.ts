export function ex3() {
  // 04-02.配列・オブジェクト
// 4.1.1
// 数値の配列 numbers を作成し、要素を 3 つ追加してください。

const numbers:number[] =[1, 2, 3];
numbers.push(4);
numbers.push(5);
numbers.push(6);
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

console.log(obj.name);
console.log(obj.age);
}
