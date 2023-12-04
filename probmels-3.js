function sortMaker(arr) {
    let temp = 0;
    let temp2 = 0;
    for (let i = 0; i < arr.length; i++){
        const index = i;
        const element = arr[index];
        if(element < 0){
            return 'Invalid value';
        }
    }
    if(arr[0] == arr[1]){
        return 'Equal'
    }
    else if(arr[0] > arr[1]){
        temp = arr[0];
        temp2 = arr[1];
    }
    else{
        temp = arr[1];
        temp2 = arr[0];
    }
    let result = [temp, temp2];
    return result;
}

console.log(sortMaker([2, 2]))
