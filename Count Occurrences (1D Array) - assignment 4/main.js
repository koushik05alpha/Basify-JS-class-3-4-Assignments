function countOccurrences(arr) {
    const occurrences = {};
    for (let str of arr) {
        occurrences[str] = (occurrences[str] || 0) + 1;
    }
    return occurrences;
}


console.log(countOccurrences(['apple', 'banana', 'apple']));

