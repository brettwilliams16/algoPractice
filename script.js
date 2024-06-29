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
