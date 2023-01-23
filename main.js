// 1) Sort an array from smallest number to largest**

function leastToGreatest(arr) {
 const smallToBig = arr.sort((a, b) => a - b)
 return smallToBig;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]




// 2) Sort an array from largest number to smallest**


function greatestToLeast(arr) {
 const bigToSmall = arr.sort((a, b) => b - a)
 return bigToSmall;
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]





// 3) Sort an array from shortest string to longest**

function lengthSort(arr) {
  
  const strShortToLong = arr.sort((a, b) => a.length - b.length)

  return strShortToLong;
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]




// 4) Sort an array alphabetically**


function alphabetical(arr) {
const sortedArray = arr.sort();
return sortedArray;
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]




// 5) Sort the objects in the array by age**

function byAge(arr){
    const sortedAges = arr.sort((a, b)=> a.age - b.age)
    return sortedAges;
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]