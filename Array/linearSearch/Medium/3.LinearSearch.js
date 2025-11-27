// Find the first even number index

// Array me se pehla even number dhundho aur uska index return karo.
// Agar even number na mile toh -1.

// Example:

// Input: [3, 5, 7, 10, 12]
// Output: 3

function evenIndex(arr) {

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2 === 0 ){
            return i ;
        }
    }
    return -1;
}

console.log(evenIndex([3,5,9,11,21,4,7,6]))


