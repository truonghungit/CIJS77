/**
 * Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("abcdef"));

/**
 * Viết một function xoá các phần từ trùng lặp trong một mảng các số
 */

function uniq(arr) {
  return [...new Set(arr)];
}

console.log(uniq([1, 2, 3, 5, 4, 2, 6, 4]));

/**
 * Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
 */

function mostFrequent(arr) {
  let maxCount = 0;
  let mostFrequentelement;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostFrequentelement = arr[i];
    }
  }

  return [mostFrequentelement, maxCount];
}

console.log(mostFrequent([10, 5, 20, 10, 10, 5, 30]));

function mostFrequentV2(arr) {
  const group = {};

  let maxCount = 1;
  let mostFrequentelement = null;

  arr.forEach((element) => {
    if (group[element]) {
      group[element]++;
    } else {
      group[element] = 1;
    }

    if (group[element] > maxCount) {
      maxCount = group[element];
      mostFrequentelement = element;
    }
  });

  return [mostFrequentelement, maxCount];
}

console.log(mostFrequentV2([1, 0, 10, 5, 20, 0, 10, 10, 0, 5, 0, 30]));
