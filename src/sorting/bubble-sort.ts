import { configureInput } from "../configure-input";

var targetarray = configureInput(process.argv)

console.log('Final Result: ', bubbleSort(targetarray));

function bubbleSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}