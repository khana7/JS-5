//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
//     Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.

// task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.

// task 5 Напишите функцию, которая принимает массив и возвращает:
//
//     Минимальный элемент
//
//     Максимальный элемент
//
//     Длину массива
//
// Среднее арифметическое
//
// Ответ должен быть в виде массива
//
// Пример входных данных: [7, 13, 3, 77, 100]
// Результат: [ 3, 100, 5, 40 ]

// task 6
// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.



// 1-task
// const isChange = (a,b,c) => {
//     return a.join().toLowerCase("").replaceAll("а","я")
// }
// console.log(isChange(['Аскар', 'Баяман', 'Калмамат']))

// 2-task
//  const isAlphabet = (element) => {
//     return element.split("").sort().join("")
// }
// console.log(isAlphabet("amazing"))

//3-task
// const isEven = arr => arr.filter(el => el % 2 ===0) 
// console.log(isEven([12,11,23,44,55,66]))

//4-task
// const onlyNum = arr => arr.filter(el => typeof el === "number")
// console.log(onlyNum([1,2,'hello',3,4,5,'world']))

//5-task
// const info = (arr) => {
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     let len = arr.length
//     let main = arr.reduce((acc,rec) =>{
//         return acc+rec/len
//     },0)
//     let newArr = []
//     return newArr = [...newArr,min,max,len,main]
//     return main
// }
// console.log(info([7,13,3,77,100]))

//6-task
// const isonlyEven = arr => arr.find(el => el % 2 === 0
// )
// console.log(isonlyEven([1,2,4,3,5]))

//7-task
// function addLength(str){
//     return str.split(' ').map(el => { return `${el} ${el.length}`  });
//   }

//8-task
// function removeEveryOther(arr){
//     return arr.filter((el, idx) => {
//       return idx % 2 === 0;
//     });
// }

// //9-task
// const isDif = str => str.map(el => el.split(" ")
// )
// console.log(isDif(['I love arrays they are my favorite']))


