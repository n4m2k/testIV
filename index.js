let currentArray = [];


function createRandomArray() {
  const randomArray = [];
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 1000; i++) {
    const randomLength = Math.floor(Math.random() * 5) + 1;
    let randomElement = "";
    for (let j = 0; j < randomLength; j++) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      randomElement += randomChar;
    }
    randomArray.push(randomElement);
  }

  return randomArray;
}

function displayArray() {
  currentArray = createRandomArray();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>${currentArray.join(", ")}</p>`;

  toggleSortButtons(true);
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function toggleSortButtons(visible) {
    const sortButtonsDiv = document.getElementById("sortButtons");
    if (visible) {
      sortButtonsDiv.classList.remove("hidden");
    } else {
      sortButtonsDiv.classList.add("hidden");
    }
  }
  

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentElement;
  }
  return array;
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function sortArray(sortFunction) {
  currentArray = sortFunction(currentArray);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>${currentArray.join(", ")}</p>`;
}


