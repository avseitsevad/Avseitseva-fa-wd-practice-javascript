/*
3)	Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8,
в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска
 */

const size = 8;
for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        console.log("# ".repeat(size / 2));
    } else {
        console.log(" #".repeat(size / 2));
    }
}