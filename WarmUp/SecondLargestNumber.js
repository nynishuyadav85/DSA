function secondLargest(arr) {
    if (arr.length < 2) {
        return null
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

let arr = [1, 4, 2, 10, 10, -5, -2]
let value = secondLargest(arr)

console.log(value)