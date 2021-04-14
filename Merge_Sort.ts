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

  console.log(newArray);
}
