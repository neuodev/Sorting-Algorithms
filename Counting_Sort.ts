function countingSort(array: number[]) {
  let counting = [];
  for (let i = 0; i < array.length; i++) {
    if (counting[i]) counting[i]++;
    else counting[i] = 1;
  }

  console.log(counting);
}

countingSort([5, 4, 2, 5, 4, 4, 5]);
