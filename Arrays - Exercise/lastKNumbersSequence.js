function arr(n, k) {

    let arr = [];

    arr.push(1);

    for (let index = 1; index < n; index++) {

        arr.push(sumKElements(k, arr, index));

    }
    console.log(arr.join(" "));
}


function sumKElements(k, arr, i) {

    let sum = 0;

    for (let index = i - 1; index >= 0; index--) {

        if (index < i - k || index < 0) break;

        sum += arr[index];

    }

    return sum;
}

arr(6, 3);
arr(8, 2);