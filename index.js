function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubarray, secondSubarray) {
  let sorted = [];
  while (firstSubarray.length != 0 && secondSubarray.length != 0) {
    if (firstSubarray[0] < secondSubarray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubarray));
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubarray);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);

  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
