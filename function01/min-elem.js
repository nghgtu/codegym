function posOfMinElem(arr) {
    if(arr.length == 0)
        return -1;
    if(arr.length == 1) 
        return 0;

    let min = arr[0];
    let j = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            j = i;
        }
    }
    return j;
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Vi tri cua phan tu nho nhat la: ", posOfMinElem(arr));
console.log("Gia tri cua phan tu nho nhat la: ", arr[posOfMinElem(arr)]);
