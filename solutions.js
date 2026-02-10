//1.Write a function that takes a string and returns it reversed (e.g., "hello" → "olleh")
      
let a = "hello"
         let reveredString = a.split("")
         .reverse()
         .join("")
         console.log(reveredString)

// 2.Determine if a given string reads the same backward as forward. Return true or false.

let b="ooppoo"
let reverseb = b.split("")
.reverse()
.join("")
if (b === reverseb)
{
    console.log("true") 
}
else {
   console.log ("false")
}


//3.Given an array of numbers, return the largest value.

let arr=[3 ,7,8,10,5]
let max=arr[0]
for (let i =0;i< arr.length; i++)
{
    if (arr[i]>max)
    {
        max=arr[i]
    }
}
console.log (max)

//4. Compute the factorial of a non-negative integer (e.g., 5! = 120). You may use a loop or recursion.
   
   function factorial(n)
   {
    if(n==1||n==0)
        return 1;

    return n*factorial(n-1);
   }
   console.log(factorial(5))

   //5.Print numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number; for multiples of 5, print "Buzz"; for multiples of both 3 and 5 print "FizzBuzz"
console.log ( "NUMBERS : 1 to 100")
  for ( let i=1;i <=100;i ++)
  {
    if ( i %3==0)
    {
        console.log ( "Fizz")
    }
    else if ( i%5==0)
    {
        console.log("Buzz")
    }
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz")
    }
    else{
        console.log (i)
    }
  }

  //6.Calculate the sum of all numbers in an array.

  let arr2=[34,654,558,-287]
  let sum=0
  for (let i=0;i< arr2.length ; i++)
  {
sum=sum+ arr2[i]
  }
console.log(sum);

//7.Count the number of vowels (a, e, i, o, u) in a string.
let sentence = "Hello I am Anisa"
 let vowel = sentence.split("") .filter(ch=>"aeiouAEIOU".includes(ch)).length
 console.log(vowel)

 //8.Write a function to check if a number is prime (only divisible  by 1 and itself)
 function prime(n) {
  if (n <= 1) return false;      
  if (n === 2) return true;       
  if (n % 2 === 0) return false;  

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;   }
  return true; 
}

console.log(prime(5)); 


//9.Given an array, return a new array with duplicates removed.
let arr3=[1,2,3,4,5,6,7,1,2,3,0,9]
let removed = arr3.filter(( value,index,self )=>{return self.indexOf(value)===index;});
console.log ( removed) 

//10. Merge two arrays into one and remove any duplicates in the result. 
//???





//11.One number is missing from an array containing integers 1 through 100. Find and return the missing number

let arr4=[1,2,3,4,5,6,7,8,10]
let arrSum = 10*(10+1)/2
let sum2=0
 for (let i=0;i< arr4.length ; i++)
  {
sum2+= arr4[i]
  }

let missingnum = arrSum-sum2
console.log(missingnum )

//12. Rotate an array by n positions. For example, rotating [1,2,3,4] by 2 yields [3,4,1,2]
let arr5=[1,2,3,4,5]
let rotate1 = arr5.slice(2,4)
let rotate2 = arr5.slice(4)
let rotate3= arr5.slice(0,2)
let combine = rotate1.concat(rotate2)
let combine2 = combine.concat(rotate3)
console.log(combine2)

//13.Determine whether two strings are anagrams of each other (same letters in a different order). Return true/false. 
let str1="anisa"
let str2="sania"
let string = str1.split("").sort().join("")
let string2 = str2.split("").sort().join("")
if(string===string2)
   console.log("true")
else
    console.log("false")

//14. Return all values that appear more than once in an array. 
let arr6=[1,2,3,4,5,6,7,1,2,5,6,5,5,5,3,0,9]
let ret = arr6.filter((element,index,array )=>{ return array.indexOf(element)!=index;});
console.log (ret) //this one's not exactly correct ? 


//15. Capitalize the first letter of each word in a sentence. For example, "hello world" → "Hello World"


//16. In a sentence, find and return the longest word. For example, "I love programming" → "programming".
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("I love programming"));

//17. Split an array into chunks of a given size. E.g., chunking [1,2,3,4,5] by 2 yields [[1,2],[3,4],[5]]. 

//18.Find the second largest number in an array.
function secondLargest(arr) {
  let unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([10,5867,383299,50]));


//19.Given a number, calculate the sum of its digits. E.g., 1234 → 1+2+3+4 = 10.


//20. Create a deep clone of a JavaScript object (i.e., copy nested objects by value, not reference). 