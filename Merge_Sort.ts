console.log(mergeSort([4, 2, 1, 7, 3 - 938503]));
function mergeSort(array: number[]) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle))
  );
}

merge([2, 8], [1, 3, 4]);
function merge(first: number[], second: number[]) {
  let p1 = 0;
  let p2 = 0;
  let newArray = [];
  while (p1 < first.length && p2 < second.length) {
    if (first[p1] > second[p2]) {
      newArray.push(second[p2]);
      p2++;
    } else {
      newArray.push(first[p1]);
      p1++;
    }
  }
  newArray = [...newArray, ...first.slice(p1), ...second.slice(p2)];

  return newArray;
}
