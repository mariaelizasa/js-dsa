const twoSum = (array, target) => {
  const HashMap = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];

    if (HashMap.hasOwnProperty(complement)) {
      return [HashMap[complement], i];
    }

    HashMap[array[i]] = i;
  }

  return null;
};
