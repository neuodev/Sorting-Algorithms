insertionSort([9, 8, 7, 1, 4]);

function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    sortSubArray(array, i);
  }
  console.log(array);
  return array;
}

function sortSubArray(array: number[], i: number) {
  while (i >= 0) {
    if (array[i] < array[i - 1]) {
      swap(i, i - 1, array);
    }
    i--;
  }
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
