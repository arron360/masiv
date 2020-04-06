let options = { // объект
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false; // добавление в объект
options.colors = { // добавление ключа которы имеет объект
    border: "black",
    bg: "red"
};
delete options.bool; // удаление ключа bool 

console.log(options);

for (let key in options) { // работа с ключами объекта options
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
// реузультат Свойство width имеет значение 1024
//Свойство height имеет значение 1024
//Свойство name имеет значение test
//Свойство colors имеет значение [object Object]

console.log(Object.keys(options).length); // подсчет свойств в объекте 

//let arr = ["First", 2, 3, "four", 5]; //массив

//arr.pop(); // удаление последнего значения . имя масива.действие
//arr.push("5"); // добавление 5 (строка) в конце в массив arr 
//arr.shift(); // удаляет первый элемент
//arr.unshift('1'); // добавление в начало масив 1 строки


//for (let i=0; i < arr.length; i++) { // перебор всез значение (в js начинается все с нуля)
//    console.log(arr[i]); // вывод i=0 выводится 1 (так как в масиве первая 1)
//}


//arr.forEach(function(item, i, mass){// это перебор массива ,переберающий элемент , номер , массив
//    console.log(i + ": " + item + "(массив: "+ mass + ")");
//}); 

//console.log(arr);

//let mass= [1, 3, 4, 6, 7];

//for (let key of mass) { // работа с ключами массива mass, of вывод значение
 //   console.log(key); // выводи ключи значенйи массива 0 1 2 3 4
//}

//for (let key in mass) { // работа с ключами массива mass , in выводи ключи
//    console.log(key); // выводи ключи значенйи массива 0 1 2 3 4
//}

//let ans = prompt("", ""); // ввод данных
//let arr = []; //создание массива

//arr = ans.split(",");// загрузка данных виденых в массив, split для разделения данных
//console.log(arr);

//let arr =['awwe', "zzz" , "sad ", "adsfas"]
//let i = arr.join(','); // склеивать в одну строку все элементы

//console.log(i);

//let arr =['awwe', "zzz" , "sad ", "adsfas"]
//let i = arr.sort(); // сортировка например по алфавиту

//console.log(i);

let arr =[1, 15, 4];
let i = arr.sort(compareNum); // сортиврока цифр 

function compareNum(a,b) { // сортирировка цифр для массива
    return a-b;
}
console.log(i);