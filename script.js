let testItems = document.querySelectorAll(".test");
console.log(testItems);
testItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(`${e.target} was clicked!`);
    item.style.backgroundColor = "red";
  });
});

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
// checks to see if string1 is a permutation of string2
function checkPerm(string1, string2) {
  let mapOne = new Map();
  let mapTwo = new Map();
  for (let i = 0; i < string1.length; i++) {
    if (mapOne.get(string1.charAt(i)) === undefined) {
      mapOne.set(string1.charAt(i), 1);
    } else {
      mapOne.set(string1.charAt(i), mapOne.get(string1.charAt(i)) + 1);
    }
  }
  for (let i = 0; i < string2.length; i++) {
    if (mapTwo.get(string2.charAt(i)) === undefined) {
      mapTwo.set(string2.charAt(i), 1);
    } else {
      mapTwo.set(string2.charAt(i), mapTwo.get(string2.charAt(i)) + 1);
    }
  }
  console.log(mapOne);
  console.log(mapTwo);
  return compareMaps(mapOne, mapTwo);
}
// compares 2 maps to see if theyre equal
function compareMaps(map1, map2) {
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
