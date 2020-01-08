function merge(array1, array2){
    let newArray = [];
    while(array1.length + array2.length > 0){
        if(array1.length === 0 && array2.length > 0){
            newArray = newArray.concat(array2);
            array2 = [];
        } else if (array1.length > 0 && array2.length === 0){
            newArray = newArray.concat(array1);
            array1 = [];
        } else if (array1[0] <= array2[0]){
            newArray.push(array1[0]);
            array1.shift();
        } else if (array1[0] > array2[0]){
            newArray.push(array2[0]);
            array2.shift();
        }
    }
    return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);