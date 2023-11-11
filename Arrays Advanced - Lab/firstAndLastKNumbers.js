function firstAndLastKNumbers(numN, numK) {
    // Напишете функция, която генерира и отпечатва следната последователност:
    // ⦁ Първият елемент е 1.
    // ⦁ Всеки следващ елемент е равен на сумата от предходните k елемента.
    // ⦁ Дължината на последователността е n елемента.

    // Изходът се отпечатва на конзолата на един ред, разделен с интервал.


    sum = 0;
    let seq = [1];

    for (let i = 1; i < numN; i++) {
        let start = Math.max(0, i - numK);
        let end = i - 1;
        sum += (start+end)
        seq[i] = sum;
    }
    console.log(seq.join(" "));
}
firstAndLastKNumbers([6, 3]);
firstAndLastKNumbers([8, 2]);

