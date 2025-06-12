function isLargest(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i]
        }
    }
    return num
}

let arr = [100, 1, 4, 2, 6, 8, 9, 11, 1, -1, 99, 98]
let value = isLargest(arr)

console.log(value)