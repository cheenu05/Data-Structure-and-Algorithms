//  Return how many times element appears
// Example:
// Array: [1, 2, 2, 3, 2], Target: 2
// Output: 3 times

function Appear(arr , target) {
  let count = "" ;

  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === target){
        count++
    }
  }
    return `${count} times` 
}

console.log(Appear([20,22,20,23,20,24,20] , 20))