//  < !--
//     1. Сделать собственные примеры методов применяемых для массивов.

//     2. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе.Предел вводит пользователь.

//     3. Отсортировать массив на 10 чисел в порядке возростания.Значения принимаются от пользователя.Сортировка осушествляется методом sort().

//     4. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

//     5. Необходимо получить предпоследний элемент из массива month и вывести его на экран.
// var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] - 3 способами
// -->
// Задание 1
// Метод split()
// const name = "Mango";
// console.log(name.split(" "));
// console.log(name.split(""));

// // Метод join()
// const city = ["Kiev", "is", "the capital", "and", "largest city", "of", "Ukraine"];
// console.log(city.join("-"));
// // Метод indexOf()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly"));
// //Метод includes()
// const user = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(user.includes("Mango"));
// // Методи push() і pop()
// const numbers = [3, 1];
// console.log(numbers.push(1));
// console.log(numbers.pop(6));
// //Метод slice()
// const userName = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(userName.slice(1, 3)); // ["Ajax", "Poly"]
// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]
// //Метод concat()
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];
// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// Задание 2

//  Определить элементы массива и вывести их значения,
//     индексы которых лежит в указанном пределе.
//     Предел вводит пользователь.

// const cars = ["Mercedes", "BMW", "Audi", "Lexus", "Honda", "Acura", "Volvo", "Jeep", "Nissan", "Porsche"];
// const a = +prompt("Введите начало промежутка(включительно): ");
// const b = +prompt("Введите конец промежутка(включительно): ");
// b = b + 1;
// const result = cars.slice(a, b);

// document.write(result);

//Задание 3

//  Отсортировать массив на 10 чисел в порядке возростания.
// Значения принимаются от пользователя.Сортировка осушествляется методом sort().

// let newArray = [];
// for (let i = 0; i < 10; i++) {
//     let array = prompt("Enter value:");
//     newArray.push(array);
// }

// newArray.sort()
// console.log(newArray);


//Задание 4
//  Создать программу, выполняющую вставку элемента в массив после элемента,
//     значение которого укажет пользователь.

// const city = ["Kiev", "Lviv", "Dnipro", "Kharkiv", "Odessa", "Mykolaiv", "Vinnytsia"];
// a = +prompt("Enter index: ");
// a = a + 1;
// city.splice(a, 0, "Chernihiv", "Khmelnytskyi");
// document.write(city)

//Задание 5.
// Необходимо получить предпоследний элемент
//  из массива month и вывести его на экран.
// // var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
//  "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]- 3 способами

// var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// 1 вариант
// console.log(month.indexOf("Ноябрь"));
// console.log(month[10]);

// 2 вариант

// console.log(month.length - 2);
// console.log(month[month.length - 2]);

// 3 вариант
// month.at(-2);
// console.log(month.at(-2));
