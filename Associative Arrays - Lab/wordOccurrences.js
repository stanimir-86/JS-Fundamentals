function wordOccurrences(input) {

    let obj = {};
    let count = 0;
    for (let words of input) {
        let [word] = words.split(", ");

        if (!obj.hasOwnProperty(word)) {
            count++;
            obj[word] = count;
            count = 0;
        } else {
            count++;
            obj[word] += count;
            count = 0;
        }

    }
    let sorted = Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    for (let [word, counts] of sorted) {
        console.log(`${word} -> ${counts} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]
);