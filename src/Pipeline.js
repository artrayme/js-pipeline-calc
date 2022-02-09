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

function main() {
    let args = getNums();
    let result = pipeline(args[0], args[1]);
    printer(result)
    console.log(result);
    console.log(RESULT);
}

function pipeline(nums1, nums2) {
    RESULT = [];
    let result = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        let tempResult = new Array(MACHINE_WORD / 2 * STEPS_COUNT);
        nums1[i] = shearLeft(nums1[i], MACHINE_WORD / 2);
        for (let j = 0; j < MACHINE_WORD / 2; j++) {
            tempResult[j * STEPS_COUNT] = and(nums1[i], nums2[i][MACHINE_WORD/2 + j])
            tempResult[j * STEPS_COUNT + 1] = shearRight(tempResult[j * STEPS_COUNT], j + 1)
            if (j === 0) tempResult[j * STEPS_COUNT + 2] = sum(createArray(MACHINE_WORD, 0), tempResult[j * STEPS_COUNT + 1]);
            else tempResult[j * STEPS_COUNT + 2] = sum(tempResult[j * STEPS_COUNT + 1], tempResult[(j - 1) * STEPS_COUNT + 2])
        }
        result[i] = tempResult;
    }

    return result;
}

// function test(){
//     let errorsCount = 0
//     for (let i = 0; i < 16; i++) {
//         for (let j = 0; j < 16; j++) {
//             let res = pipeline([convertDecToBin(i)], [convertDecToBin(j)]);
//             if (convertBinToDec(res[0][res[0].length - 1]) !== i * j) {
//                 console.log("Error: " + i + "*" + j + "=" + i * j + "   but = " + convertBinToDec(res[0][res[0].length - 1]))
//                 errorsCount++;
//             }
//         }
//     }
//     console.log("ERRORS = " + errorsCount)
// }
