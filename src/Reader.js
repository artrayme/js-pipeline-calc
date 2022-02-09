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

function getValidInputData() {

    let nums1 = document.getElementById('InputPairFirstElem').value.replace(/\s+/g, '');
    let nums2 = document.getElementById('InputPairSecondElem').value.replace(/\s+/g, '');
    nums1 = nums1.replace(/,+$/g, '');
    nums2 = nums2.replace(/,+$/g, '');
    if (!nums1.length || !nums2.length)
        alert("Одно из полей пусто");
    else {
        nums1 = nums1.split(',')
        nums2 = nums2.split(',')
        if (nums1.length !== nums2.length) {
            alert("Векторы не совпадают по длине")
        } else {
            let isCorrect = true;
            for (let i = 0; i < nums1.length; i++) {
                if (isNum(nums1[i]) === false) {
                    isCorrect = false
                }
                if (isNum(nums2[i]) === false) {
                    isCorrect = false
                }

            }
            if (isCorrect) {
                let resNums1 = []
                let resNums2 = []
                let isCorrect= true;
                for (let i = 0; i < nums1.length; i++) {
                    let temp = parseInt(nums1[i]);
                    if (temp<=15) resNums1.push(convertDecToBin(temp))
                    else {
                        isCorrect = false
                        alert("Ошибка: введенное число " + temp + " больше 15")
                    }
                }
                for (let i = 0; i < nums2.length; i++) {
                    let temp = parseInt(nums2[i]);
                    if (temp<=15) resNums2.push(convertDecToBin(temp))
                    else {
                        isCorrect = false
                        alert("Ошибка: введенное число " + temp + " больше 15")
                    }
                }
                document.getElementById('InputVector1').innerHTML = "Вектор №1 = (" + nums1 + ')';
                document.getElementById('InputVector2').innerHTML = "Вектор №2 = (" + nums2 + ')';
                if (isCorrect === true) return [resNums1, resNums2]
            } else {
                alert("Встречен неопознанный символ")
            }
        }
    }
}

function isNum(inNum) {
    let num = "" + inNum;
    for (let i = 0; i < num.length; i++) {
        if (!num[i].match(/[0-9]+/)) return false;
    }
    return true;
}

function getNums() {
    let testData = getValidInputData();
    return testData;
}


function convertDecToBin(number) {
    let bin = createArray(MACHINE_WORD);
    let i = MACHINE_WORD - 1;
    while (number !== 0) {
        bin[i] = number % 2;
        number = Math.floor(number / 2);
        i--;
    }
    return bin;
}