function isAvaliable(num) {
    let arr = [10, 3, 4, 5]
    let i;

    for (i = 0; i < arr.length; i++) {
        if (num == arr[i]) {

            return i;
        }

    }
    return -1
}


let value = isAvaliable(3)

console.log(value)