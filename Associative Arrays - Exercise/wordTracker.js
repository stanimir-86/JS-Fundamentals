function wordTracker(input) {
    let words = input.shift().split(" ");
    let obj = {};
    for (let word of words) {
        obj[word] = 0;
    }
    for (let word of input) {

        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        }
    }
    let rntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of rntries) {
        console.log(`${key} - ${value}`);
    }
}
    wordTracker([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ])