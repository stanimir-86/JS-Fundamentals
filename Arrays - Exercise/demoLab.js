function solve(arr, sumOfElements) {

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let element = Number(arr[i-1]);
            for (let j = i; j < arr.length; j++) {
                let nextElement = Number(arr[j]);
                if ((element + nextElement) === sumOfElements) {
                    console.log(`${element} ${nextElement}`);
                }

            }

        }
    }
}
// solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
// solve([1, 2, 3, 4, 5, 6], 6);
