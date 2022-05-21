/* Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values. */


function numberOfWays(arr, k) {
  // Write your code here
  let Hash = {};
  let qtd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Hash[arr[i]]) {
      Hash[arr[i]] += 1;
    } else {
      Hash[arr[i]] = 1;
    }
  }

  let keysHash = Object.keys(Hash);

  for (let i = 0; i < keysHash.length; i++) {
    if (Hash[k - keysHash[i]]) {
      if (k - keysHash[i] == keysHash[i]) {
        let value = Hash[keysHash[i]];
        qtd += (value * (value - 1)) / 2;
      } else {
        qtd += (Hash[keysHash[i]] * Hash[k - keysHash[i]]) / 2;
      }
    }
  }

  return qtd;
}
numberOfWays([1, 2, 3, 4, 3], 6)
numberOfWays([1, 5, 3, 3, 3], 6)