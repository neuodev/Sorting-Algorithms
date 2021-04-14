console.log(quickSort([15, 6, 3, 1, 22, 10, 13], 0, 6));
function quickSort(array: number[], start: number, end: number) {
  if (start >= end) return;
  let boundary = partition(array, start, end);
  quickSort(array, start, boundary - 1);
  quickSort(array, boundary + 1, end);

  return array;
}

function partition(array: number[], start: number, end: number) {
  let pivot = end;
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    const current = array[i];
    if (current <= array[pivot]) swap(i, ++boundary, array);
  }
  // the idx of the pivot after been swaped
  return boundary;
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}
