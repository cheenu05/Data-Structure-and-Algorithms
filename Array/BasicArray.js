// Some basic and beginner Friendly Array problems 
// Doing CRUD operation ON Array 
// C:Creat , R:Read , U:Update , D:Delete

// Creating an array 
let arr = [20,40,30,50,60]

// Read an Array 
console.log("find the index element" ,arr[3])  // It provide Ans : 50  Because of there Index value  -- Array Start from [0,1,2,3,4 ....n-1]


//  Update an Array 
arr[5]=80
console.log("'add the element", arr)  // output : [20,40,30,50,60]

// with the help of some Methods : Methods are preBuild things which help the user to get there valuable Ans 

arr.push(90); //push add the element in the last of an array 
console.log("with the help of push method",arr) // output : [20,40,30,50,60,90]

arr.unshift(10); // unshift add the element in the first in the array 
console.log("with the help of unshift",arr)  // output : [10,20,40,30,50,60,90]

arr.splice(2 , 0 , 100 ) // splice(index , 0 or any 1 , 2 any value of removing element  , new element).  add element after index value , 0 means not remove any elemnt  , 1 means remove tha element which comes after adding the new element 

console.log("add the element with the help of splice method ",arr) // output : [10 ,20 , 100, 40 , 30 , 50 ,60 ,80 ,90]. 


//delete the arr

arr.pop() // removing the element from last
console.log("pop method",arr) 

arr.shift() // remome the first element of an array
console.log("shift method",arr)

arr.splice(2 ,1) // remove the index value here i put 2 index value element  
console.log(arr)