// Find first number greater than target

// Target number diya hai — array me se first number jo usse bada ho uska index return karo.

// Example:

// Input: arr = [4, 6, 8, 12, 20], target = 9
// Output: 3 (kyunki 12 pehle number > 9 hai)


function firstlargestnum(arr , target) {

    for(let i = 0 ; i < arr.length ; i++ )
    {
        if(arr[i] > target){
            return i;
        }
    }
    return -1;
}


console.log(firstlargestnum([4,6,8,12,20] , 9))