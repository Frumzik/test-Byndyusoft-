function runTests() {

function assertEqual(actual, expected, description) {
    if (actual === expected) {
        console.log(`${description} — успешно`);
    } else {
        console.error(`${description} — ожидалось ${expected}, получено ${actual}`);
        }
    }


    assertEqual(sumTwo([4, 0, 3, 19, 492, -10, 1]),-10,'cумма двух минимальных из [-10, 0]');

    assertEqual(sumTwo([-5, -20, -1, -3]),-25,'cумма двух минимальных из [-20, -5]');

    assertEqual(sumTwo([42]),null,'одна цифра');

    assertEqual(sumTwo([]),null,'пустой массив');

    assertEqual(sumTwo([10, NaN, "abc", 3]),13,'фильтрация массива');

    const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i + 1);
    
    assertEqual(sumTwo(largeArray),3,'сумма двух минимальных из [1,2] в большом массиве');
}
runTests();
