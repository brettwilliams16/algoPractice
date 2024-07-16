let testItems = document.querySelectorAll(".test");
console.log(testItems);
testItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(`${e.target} was clicked!`);
    item.style.backgroundColor = "red";
  });
});

// Determines if a string has all unique characters
function allUnique(string) {
  let myMap = new Map();
  for (let i = 0; i < string.length; i++) {
    if (myMap.get(string.charAt(i)) === undefined) {
      myMap.set(string.charAt(i), 1);
    } else {
      return false;
    }
  }
  return true;
}

// checks to see if one string is a permutation of the other
function checkPerm(string1, string2) {
  let mapOne = addToMap(string1);
  let mapTwo = addToMap(string2);

  return compareMaps(mapOne, mapTwo);
}

function addToMap(string) {
  // takes a string as input and creates a map with every character in the string
  let myMap = new Map(); // keeps track of how many times each character occurs
  for (let i = 0; i < string.length; i++) {
    if (myMap.get(string.charAt(i)) === undefined) {
      myMap.set(string.charAt(i), 1);
    } else {
      myMap.set(string.charAt(i), myMap.get(string.charAt(i)) + 1);
    }
  }

  return myMap;
}

function compareMaps(map1, map2) {
  // checks to see if two maps are equal. returns true if so, and false if not
  let testVal;
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    testVal = map2.get(key);
    if (val !== testVal) {
      return false;
    }
  }
  return true;
}

// converts all white space into the string "%20"
function URLIfy(string) {
  let newWord = string.replaceAll(" ", "%20");
  return newWord;
  //     for(let i = 0; i < string.length; i++){
  //         if(string.charAt(i) === " "){
  //             string.sli
  //         }
  //     }
}

function reverseString(word) {
  // uses a stack to reverse a string
  let myWord = word.split("");
  let newWord = [];
  while (myWord.length > 0) {
    let i = myWord.pop();
    newWord.push(i);
  }
  return newWord.join("");
}

function fib(i) {
  if (i == 0) {
    return 0;
  }
  if (i == 1) {
    return 1;
  } else return fib(i - 1) + fib(i - 2);
}

function myFunction() {
  let count = 0;
  function myInnerFunction() {
    console.log(count);
    count++;
  }
  return myInnerFunction;
}

function countAnimal(animal) {
  let count = 1;
  function returnCount() {
    console.log(`There are ${count} ${animal}`);
    count++;
  }
  return returnCount;
}

let myBirds = countAnimal("birds");
let myDogs = countAnimal("dogs");

myBirds();
myBirds();
myDogs();
myBirds();
myDogs();
myDogs();

let buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerHTML + " was clicked!");
  });
});

// Playing with simple API logic
async function getGithubUser(username) {
  let response = await fetch(
    "https://api.github.com/users/" + username.toString()
  );
  if (!response.ok) {
    throw new Error("There was an error fetching the data");
  } else {
    let data = await response.json();
    console.log(data);
    let img = document.createElement("img");
    img.src = data.avatar_url;
    img.alt = `An imgage of ${response.login}'s avatar`;
    document.body.appendChild(img);
  }
}
