function arrayRotation(arr, numberOfRotation) {

    let buffArr = [];

    for (let i = 0; i < numberOfRotation; i++) {
        let currElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(currElement);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);    