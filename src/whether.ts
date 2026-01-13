import Chart from 'chart.js/auto';

type WeatherResponse = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export function whether() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&timezone=Asia%2FTokyo';

fetch(url)
  .then ((data) => {
    return data.json();
  })
  .then ((json) => {
    console.log(json);
    drawChart(json);
  });

  
  function drawChart(json: WeatherResponse): void {
  const mydata = {
    labels: json.daily.time,
    datasets: [{
      label: '最高気温',
      data: json.daily.temperature_2m_max,
      borderColor: 'rgb(192, 75, 75)',
    },{
      label: '最低気温',
      data: json.daily.temperature_2m_min,
      borderColor: 'rgb(75, 75, 192)',
    }]
  };
  
  const graph = document.getElementById('stage') as HTMLCanvasElement;
  new Chart(graph, {
    type: 'line',
    data: mydata,
  });
}


} 



// 下記非同期処理の学習コメント用

// setTimeout(() => {
//   console.log(3);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(1);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("スタート");

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(3);
//     resolve();
//   }, 1000);
// } ).then(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 1000);
//   });
// }).then(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// }); 

// // new Promise(() => {}); 基本形

// new Promise (resolve => resolve("こんにちは"))
//   .then(res => console.log(res));

// async function func() {
//   await log(3);
//   await log(2);
//   await log(1);
// }

// function log(num) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// func();

