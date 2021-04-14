function countingSort(array: number[]) {
  let counting = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (counting[num] >= 0) counting[num]++;
    else counting[num] = 1;
  }
  let start = 0;
  for (let i = 0; i < counting.length; i++) {
    if (counting[i] > 0) {
      for (let j = 0; j < counting[i]; j++) {
        array[start] = i;
        start++;
      }
    }
  }

}

countingSort([5, 3, 2, 5, 4, 4, 5]);
