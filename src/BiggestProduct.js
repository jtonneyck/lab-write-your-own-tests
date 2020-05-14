// Iteration 1.1
function biggestProduct(matrix) {
    if (matrix.length === 0){
        return 0;
    }
}

// Iteration 1.2
function productOf4Numbers(a, b, c, d){
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number'){
        throw new Error ('The numbers are invalid');
    } else {
        return (a * b * c * d);
    }
}

// Iteration 1.3
function biggestOf4NumbersInARow(array){
    const isANumber = (value) => typeof value === 'number';
    if (array.every(isANumber)){
        let biggestProduct = 0;
        for (let i=0; i<array.length-3; i++) {
            if (array[i]*array[i+1]*array[i+2]*array[i+3] > biggestProduct){
                biggestProduct = array[i]*array[i+1]*array[i+2]*array[i+3];
            }
        }
        return biggestProduct;
    } else {
        throw new Error ("The array doesn't contain only numbers");
    }
}

// Iteration 2.1
function biggestOf4NumbersInAllRows(matrix){
    let biggestProduct = 0;
    for (let i=0; i<matrix.length; i++) {
        const isANumber = (value) => typeof value === 'number';
        if (matrix[i].every(isANumber)){
            if (biggestOf4NumbersInARow(matrix[i]) > biggestProduct){
                biggestProduct = biggestOf4NumbersInARow(matrix[i]);
                console.log(biggestProduct)
            }
        } else {
            throw new Error ("The matrix doesn't contain only numbers");
        }
    }
    return biggestProduct;
}

// Iteration 2.2
function biggestOf4NumbersInAColumn(matrix){
    const isANumber = (value) => typeof value === 'number';
    let biggestProduct = 0;
    for (let i=0; i<matrix.length-3; i++) {
        if (matrix[i].every(isANumber) && matrix[i+1].every(isANumber) && matrix[i+2].every(isANumber) && matrix[i+3].every(isANumber)){
            if (matrix[i][0]*matrix[i+1][0]*matrix[i+2][0]*matrix[i+3][0] > biggestProduct){
                biggestProduct = matrix[i][0]*matrix[i+1][0]*matrix[i+2][0]*matrix[i+3][0];
            }
        } else {
            throw new Error ("The matrix doesn't contain only numbers");
        }
    }
    return biggestProduct;
}

// Iteration 2.3
function biggestOf4NumbersInAllColumns(matrix){
    let biggestProduct = 0;
    for (let i=0; i<matrix.length-3; i++) {
        const isANumber = (value) => typeof value === 'number';
        if (matrix[i].every(isANumber) && matrix[i+1].every(isANumber) && matrix[i+2].every(isANumber) && matrix[i+3].every(isANumber)){
            for (let j=0; j<matrix.length; j++) {
                if (matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j] > biggestProduct){
                    biggestProduct = matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
                }
            }
        } else {
            throw new Error ("The matrix doesn't contain only numbers");
        }
    }
    return biggestProduct;
}
