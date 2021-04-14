bucketSort([2, 3, 5, 4, 6, 7]);

function bucketSort(array: number[]) {
  let buckets = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    let selectBucket = Math.floor(num / buckets.length);
    buckets[selectBucket].push(num);
  }

  let idx = 0;
  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];
    bucket.sort((a, b) => a - b);
    for (let num of bucket) {
      array[idx] = num;
      idx++;
    }
  }

  return array;
}
