/* Given an array A of integers and another non negative integer k, find if there exists 2 indices i and j such that A[i] - A[j] = k, i != j.*/

function DiffPossible(A, B) {
  let HashMap = {};
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    HashMap[A[i]] = true;
  }

  let keysHash = Object.keys(HashMap);

  for (let i = 0; i < keysHash.length; i++) {
    if (HashMap[keysHash[i] + B]) {
      result = 1;
    }
  }
  return result;
}
