function equalArrays(FirstArr, secondArr) {

    let sum = 0;

    for (let i = 0; i < FirstArr.length; i++) {

        if (FirstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return;

        }
        sum += parseInt(FirstArr[i], 10);


    }


    console.log(`Arrays are identical. Sum: ${sum}`);
}
// equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);