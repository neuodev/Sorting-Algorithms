console.log(bubbleSort([9, 8, 4, 5, 7]));
function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let isSwap = false;
      if (array[j] >= array[j + 1]) {
        swap(j, j + 1, array);
        isSwap = true;
      }

      if (!isSwap) break;
    }
  }

  return array;
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
