/*
Do the below programs in anonymous function & IIFE
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
Return median of two sorted arrays of the same size.
Remove duplicates from an array
Rotate an array by k times

Do the below programs in arrow functions.
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array

*/

// Anonymous Functions


//Generate Feed array of 10 random elements
let a =[];
for(let i =0;i<10;i++){
    a.push(Math.floor(Math.random() * 100) + 1);
}
console.log(a);

//Print odd numbers in an array

var odd = function(a) {
    for ( let i=0;i<a.length;i++){
        if(a[i]%2!==0){console.log(a[i]);}
    }
 }

 odd(a);

 //Convert all the strings to title caps in a string array

 let string = ["abinaya","Karthik","Rishi","hello","malayalam"];  //Feed array
 let output =[];                                      //output array

 var convert = function(input){
    for ( let i=0;i<input.length;i++){
         let temp = input[i].toString();
        output.push(temp.toUpperCase());
    }
    return output;
 }
 console.log(convert(string));

 //Sum of all numbers in  array
let sum= 0;
 let  sumOfArray = function (a){
    for(let i=0;i<a.length;i++){
        sum+=a[i];
    }
    return sum;
 }
 console.log(sumOfArray(a));

 //Return all the prime numbers in an array - IIFE function

 let primearray =[];


 (function(a){
    let checkPrime = function(n){
        if(n==1 || n==2){
            return true;
        }
        else{
            for( let i =2;i<n;i++){
                if(n%i===0){
                    return false;
                }               
            }
            return true;
        }
    };
    for(let i =0;i<a.length;i++){
        if(checkPrime(a[i])===true){
            primearray.push(a[i]);
        }
    }
 }) (a);

 console.log(primearray);

 //check palindrome in array
 (function(a){
    let checkpal = function(word){
        let revstring = word.split("").reverse().join("");
            if(revstring==word){
                return true;
            }
        };
    for(let i=0;i<a.length;i++){
        if(checkpal(a[i])){
            console.log(a[i]);
        }
    }
})(string); 
            
       
    
    





