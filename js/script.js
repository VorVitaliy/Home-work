"use strict";

//Первое задание;

var selector = document.querySelector("#item_1").innerHTML;
var id = document.getElementById('item_1').innerHTML;
var children = document.body.children[0].children[0].innerHTML;

console.log("First element 'li', selector:", selector);
console.log("First element 'li', id:", id);
console.log("First element 'li', children:", children);


//Третье задание;
//3.1 Имя начинаеться на большую букву


function firstSymbol(string) {
    var result;
    if (string.match(/^[A-Z]/)) {
        result = 'Имя начинается на большую букву.';
    } else {
        result = 'Введите имя с большой буквы.';
    }
    return result;
}

console.log(firstSymbol("Petia"));


//3.2 В строке есть цифры, их количесвто больше 5

function num(str) {
    var result;
    var numbers = str.match(/\d/g);
    if (numbers.length >= 5) {
        result = 'В строке есть 5 или более цифр: ' + numbers;
    } else {
        result = 'В строке меньше 5 цифр';
    }
    return result;
}

console.log(num("44лрг7s_df4"));


// 3.3 Найдем в строке слово Vitalik если оно есть

function Vit(str) {
    var reg = /Vitalik/ig.test(str);
    if (reg) {
        return "Слово Vitalik есть в тексте";

    } else {
        return "Слова Vitalik нет в тексте";
    }
}

console.log(Vit("jfkdlsjfkdls fkjdls Vitalik fds hg"));





// Четвертое задание

function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function binToDec(bin) {
    return parseInt(bin, 2);
}
console.log("Перевод из десятичного числа, в двоичное:", decToBin(154));
console.log("Перевод из двоичного числа, в десятичное:", binToDec('101111'));