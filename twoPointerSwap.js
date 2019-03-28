function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;

  function swap(swapArr, front, back) {
    // swap in place
    const elm1 = swapArr[front];
    const elm2 = swapArr[back];

    swapArr[front] = elm2;
    swapArr[back] = elm1;
  }

  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }

  return arr;
}

array = [9, 4, 2, 4, 6, 1, 3, 1, 7, 365, 8, 0, 4];

console.log(array);

reverse(array);

console.log(array);
