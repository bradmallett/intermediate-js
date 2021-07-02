function diffArray(arr1, arr2) {
  var newArr = [];

  const compare = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if(!second.includes(first[i])){
        newArr.push(first[i]);
      }
    }
  }

  compare(arr1, arr2);
  compare(arr2, arr1);

  console.log(newArr);
  return newArr
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);