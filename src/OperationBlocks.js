//////////////////////////////////////////////////////////////////////////////////////
// Лабораторная работа 1 по дисциплине МРЗвИС
// Выполнена студентом группы 9217023
// БГУИР Василевский А.Д.
// Вариант 3 - алгоритм вычисления произведения пары 4-разрядных чисел
// умножением со старших разрядов со сдвигом множимого (частичного произведения) вправо;
// 16.05.2021
// Использованные материалы:
// https://www.w3schools.com/js/ - методические материалы по JS
// https://ru.wikipedia.org/wiki/ - описание работы конвейера
// https://habr.com/ru/post/182002/ - реализация конвейера компьютерных процессоров
// http://dit.isuct.ru/IVT/BOOKS/ARCHITECTURE/arch2/GLAVA_7.HTM - описание работы процессорного конвейера
// http://perscom.ru/2012-01-20-09-26-05/8-konveer-komand/19-konveer-komand - описание работы процессорного конвейера
// https://www.studytonight.com/computer-architecture/pipelining#:~:text=An%20instruction%20pipeline%20reads%20instruction,into%20segments%20of%20equal%20duration.
// https://www.javatpoint.com/instruction-pipeline

function and(num1, num2) {
    RESULT.push("And")
    RESULT.push(num1)
    RESULT.push(createArray(MACHINE_WORD, num2))
    if (num2 === 1) return num1;
    else return createArray(MACHINE_WORD);
}

function sum(num1, num2) {
    RESULT.push("Sum")
    RESULT.push(num1)
    RESULT.push(num2)
    let result = createArray(MACHINE_WORD);
    for (let i = MACHINE_WORD - 1; i >= 0; i--) {
        result[i] += num1[i] + num2[i];
        if (result[i] > 1) {
            result[i - 1]++;
            result[i] -= 2;
        }
    }
    return result;
}

function shearRight(num1, shearVal) {
    RESULT.push("ShiftRight")
    RESULT.push(num1)
    RESULT.push(convertDecToBin(shearVal))
    if (shearVal === 0) return num1;
    let result = createArray(MACHINE_WORD);
    for (let i = 0; i < MACHINE_WORD - shearVal; i++) {
        result[i + shearVal] = num1[i];
    }
    return result;
}

function createArray(arrayLength, filler = 0) {
    let arr = new Array(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
        arr[i] = filler;
    }
    return arr;
}

function shearLeft(num1, shearVal) {
    if (shearVal === 0) return num1;

    let result = createArray(MACHINE_WORD);
    for (let i = shearVal; i < MACHINE_WORD; i++) {
        result[i - shearVal] = num1[i];
    }
    return result;
}