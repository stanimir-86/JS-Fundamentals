function negativeOrPositiveNumbers(arr) {
    let result = [];//създаване на нов масив

    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]) //вземам текущия елемент от arr[i],като число
        if (element < 0) {
            result.unshift(element);//добавям елементи в новия масив в началото му
        } else {
            result.push(element)//добавям елементи в новия масив в края му
        }
    }
    return result.join("\n");// отпечатвам по този начин на нов ред всеки елемент \n
}

console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));
console.log(negativeOrPositiveNumbers(['3', '-2', '0', '-1']));


