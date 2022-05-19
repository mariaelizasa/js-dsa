function twoStrings(s1, s2) {
  let FirstArr = s1.split("");
  let SecondArr = s2.split("");
  let HashMap = {};
  let Auxresult = false;

  for (let i = 0; i < FirstArr.length; i++) {
    HashMap[FirstArr[i]] = true;
  }

  for (let i = 0; i < SecondArr.length; i++) {
    if (HashMap[SecondArr[i]]) {
      Auxresult = true;
    }
  }
  let Result = Auxresult === true ? "YES" : "NO";
  return Result;
}
