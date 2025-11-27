//  Search inside array of strings

// Example:
// Input: ["apple", "banana", "mango"], Search: "mango"
// Output: 2

function fruits(arr, target) {
for(let i = 0 ; i < arr.length ; i++){

    if(arr[i] === target){
        return i
    }
}
return -1;
}

 console.log(fruits(["apple", "banana" , "mango"], "mango"));


//  --- Second Program ----


    const arr = ["apple", "banana", "mango"];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === "mango") {
            console.log(index);
        }


    }

