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

//Processor word length
let MACHINE_WORD = 8;

let STEPS_COUNT = 3;

//Tics for different instructions config
let TICS_PER_AND_INSTRUCTION = 1;
let TICS_PER_SHEAR_RIGHT_INSTRUCTION = 1;
let TICS_PER_SUM_INSTRUCTION = 1;

let RESULT = []
