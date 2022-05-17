function FindIntersection(strArr) {
  const FirstArr = strArr[0].split(", ");
  const LastArr = strArr[1].split(", ");
  let ResultArr = [];
  let CheckMap = {};

  FirstArr.forEach((num) => (CheckMap[num] = true));

  LastArr.forEach((num) => {
    if (CheckMap[num]) {
      ResultArr.push(num);
    }
  });

  if (ResultArr.length === 0) {
    false;
  }
  return ResultArr.join(",");
}

// keep this function call here
console.log(FindIntersection(readline()));
