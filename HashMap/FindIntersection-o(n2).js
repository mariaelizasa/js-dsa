// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) {
  const FirstArr = strArr[0].split(", ");
  const LastArr = strArr[1].split(", ");
  let NewArr = {};

  NewArr = FirstArr.filter((arr) => LastArr.includes(arr)).join(",");

  if (NewArr.length > 0) {
    return NewArr;
  } else {
    return false;
  }
}

// keep this function call here
console.log(FindIntersection(readline()));
