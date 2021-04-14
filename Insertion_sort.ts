insertionSort([9, 8, 7, 1, 4]);

function insertionSort(array: number[]) {
  for (let i = 0; i <= array.length; i++) {
    sortSubArray(array, i);
  }
  return array;
}

function sortSubArray(array: number[], i: number) {
  let idx = i - 1;
  while (idx >= 0) {
    if (array[idx] < array[idx - 1]) {
      swap(idx, idx - 1, array);
    }
    idx--;
  }
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
