function isNegative(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1;
        }
    }
    return count
}

let arr = [-1, 2, 3, -4, 9, -7, -6]
let value = isNegative(arr)

console.log(value)