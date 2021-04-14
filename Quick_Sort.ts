quickSort([15, 6, 3, 1, 22, 10, 13]);

function quickSort(array: number[]) {
  let pivot = array.length - 1;
  let p = -1;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current <= array[pivot]) {
      p++;
      swap(i, p, array);
    }
  }
  console.log(array);
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
