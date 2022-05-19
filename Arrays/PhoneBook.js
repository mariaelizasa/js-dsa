function processData(input) {
  let Hashmap = {};
  let ResultArr = input.split("\n");
  let AmountPhoneNumbers = ResultArr[0];
  let Index = 1 + parseInt(AmountPhoneNumbers);

  for (let i = 1; i <= AmountPhoneNumbers; i++) {
    let PhoneArr = ResultArr[i].split(" ");
    Hashmap[[PhoneArr[0]]] = PhoneArr[1];
  }

  for (let i = Index; i < ResultArr.length; i++) {
    if (Hashmap[ResultArr[i]]) {
      console.log(ResultArr[i] + "=" + Hashmap[ResultArr[i]]);
    } else {
      console.log("Not found");
    }
  }
}
