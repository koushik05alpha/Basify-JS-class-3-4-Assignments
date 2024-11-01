function flatten(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }
    return flattenedArray;
}


console.log(flatten([[1, 2], [3, 4]])); 
