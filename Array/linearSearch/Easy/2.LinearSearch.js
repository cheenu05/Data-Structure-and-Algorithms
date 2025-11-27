// ---- Return all matching indexes ----

function MatchingIndex(arr , targetVal){
    let same = []

    for(let i =0 ; i < arr.length ; i++){
        if(arr[i] === targetVal){
            same.push(i) ;
        }
    }
return same;
}

console.log(MatchingIndex([1,2,7,7,8,7,9] ,7))