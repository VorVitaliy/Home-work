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


function checkToFirstSymbol(string) {

    return (string.match(/^[A-Z]/))? 'Имя начинается на большую букву.' : 'Введите имя с большой буквы.' ;
}

console.log(checkToFirstSymbol("Petia"));


//3.2 В строке есть цифры, их количесвто больше 5

function CheckToNum(str) {
    var result;
    var numbers = str.match(/\d/g);
    if (numbers.length >= 5) {
        result = 'В строке есть ' + numbers.length +  ' цифр: ' + numbers;
    } else {
        result = 'В строке меньше 5 цифр';
    }
    return result;
}

console.log(CheckToNum("44лрг7hghdgf6546543s_df4"));


// 3.3 Найдем в строке слово Vitalik если оно есть

function searchName(str) {

    return (/Vitalik/ig.test(str)) ? "Слово Vitalik есть в тексте" : "Слова Vitalik нет в тексте";
}

console.log(searchName("jfkdlsjfkdls fkjdls Vitalik fds hg"));





// Четвертое задание

function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function binToDec(bin) {
    return parseInt(bin, 2);
}
console.log("Перевод из десятичного числа, в двоичное:", decToBin(154));
console.log("Перевод из двоичного числа, в десятичное:", binToDec('101111'));