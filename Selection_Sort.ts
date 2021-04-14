console.log(selectionSort([9, 8, 7, 1, 4]));
function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) minIdx = j;
    }
    if (minIdx === i) break;
    swap(i, minIdx, array);
  }

  return array;
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
