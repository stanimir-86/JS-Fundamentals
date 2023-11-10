function commonElements2(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let currWord = firstArr[i];
        if (secondArr.includes(currWord)) {
            console.log(currWord);
        }
    }


}
commonElements2(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);