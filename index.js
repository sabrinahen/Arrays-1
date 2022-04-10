function push2front(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; 
}

function popFront(arr) {
    var returnFirst = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return returnFirst;
}

function insertAt(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val;
}