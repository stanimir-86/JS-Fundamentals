function arrayRotation2(arr, arrayRotation) {

    for (let i = 0; i < arrayRotation; i++) {

        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}
arrayRotation2([51, 47, 32, 61, 21], 2);