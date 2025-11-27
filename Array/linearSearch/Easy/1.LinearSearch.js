// ---- Linear Search Algorithm ----

function SearchElement(arr, targetVal) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetVal) {
                       return `the target value is ${targetVal} , and the index value is ${i}`;
        }
    }
    return -1
}

console.log(SearchElement([2, 3, 4, 5, 6, 8] , 6))
