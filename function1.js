//anonymous function & IIFE
//Inputs
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 5, 7, 11, 13, 17, 19, 23, 1, 2, 3, 2, 4, 1, 5, 6, 5];
let str = ["apple", "banana", "cherry", "orange", "grape", "racecar", "level", "rotor", "madam", "civic"];
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [2, 3, 5, 7, 11, 13, 17, 19, 23];

console.group("Odd numbers in array");
let odd = num.filter(oddFilter);
function oddFilter(num){
    return !(num%2 === 0);
}
console.log(odd);
console.groupEnd();

console.group("Convert all the strings to title caps in a string array");
let cap = str.map(strCap);
function strCap(a){
    return a[0].toUpperCase()+a.slice(1);
}
console.log(cap);
console.groupEnd();

console.group("Sum of all numbers in an array");
(function(){
    let sum = 0;
    for (var i of num){
        sum += i;
    }
    console.log(sum);
})();
console.groupEnd();

console.group("Return all the prime numbers in an array");
let prime = num.filter(isPrime);
function isPrime(val){
    for (var i = 2; i<val; i++){
        if(val % i === 0){
            return false;
        }
    }
    return val > 1;
}
console.log(prime);
console.groupEnd();

console.group("Return all the palindromes in an string  array");
let palindrome = str.filter(isPali);
function isPali(strInp){
    strCopy = strInp.split("").reverse().join("");
    if(strCopy !== strInp){
        return false;
    }else{
        return true;
    }
}
console.log(palindrome);
console.groupEnd();

console.group("Return median of two sorted arrays of the same size");
(function (arr1,arr2){
    let result;
    let arrMerged = [...arr1,...arr2].sort();
    if(arrMerged.length % 2 === 0){
        let div1 = (arrMerged.length/2) - 1;
        let div2 = arrMerged.length/2
        result = arrMerged[div1] + arrMerged[div2];
    }else{
        let div = Math.round(arrMerged.length/2);
        result = arrMerged[div];
    }
    console.log(result);
})(arr1,arr2);
console.groupEnd();

console.group("Remove duplicates from an array");
let uniArr = num.filter(dupRemover);
function dupRemover(numInp,ind){
    if (num.indexOf(numInp)!== ind){
        return false;
    }else{
        return true;
    }
}
console.log(uniArr);
console.groupEnd();

console.group("Rotate an array by k times");
const k = 3;
let arrRotated = function toRotateArray(arr){
    for (var i = 0; i<k; i++){
        let temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr);
}
arrRotated(arr1);
console.groupEnd();




    