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
function transpose(matrix){
    let newMatrix = [];    
    for(let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++){
            if (i === 0) {
                newMatrix.push([]);
            }
            newMatrix[j].push(matrix[i][j]);
        }
    }
    return newMatrix;
}

function biggestOf4NumbersInAColumn(matrix){
    const newMatrix = transpose(matrix);
    return biggestOf4NumbersInARow(newMatrix[0]);
}

// Iteration 2.3
function biggestOf4NumbersInAllColumns(matrix){
    const newMatrix = transpose(matrix);
    return biggestOf4NumbersInAllRows(newMatrix);
}

function biggestDiagonalRightToLeft(matrix) {
    let biggestProduct = 0;
    for (let i=0; i<matrix.length-3; i++){
      for (let j=0; j<matrix[i].length-3; j++){
        // left to right
        if (matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3] > biggestProduct){
            biggestProduct = matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3];
        }
      }
    }
    return biggestProduct;
}


function biggestOf4NumbersInAllDiagonals(matrix){
    let biggestProduct = biggestDiagonalRightToLeft(matrix);
    let newMatrix = transpose(matrix);
    if (biggestDiagonalRightToLeft(newMatrix) > biggestProduct){
        biggestProduct = biggestDiagonalRightToLeft(newMatrix)
    }
    return biggestProduct;
}

function biggestOf4Numbers(matrix){
    let biggestProductRows = biggestOf4NumbersInAllRows(matrix);
    let biggestProductColumn = biggestOf4NumbersInAllColumns(matrix);
    let biggestProductDiagonal = biggestOf4NumbersInAllDiagonals(matrix);
    let biggestProduct = biggestProductRows;
    if (biggestProductRows < biggestProductColumn){
        biggestProduct = biggestProductColumn;
    }
    if (biggestProductColumn < biggestProductDiagonal){
        biggestProduct = biggestProductDiagonal;
    }
    return biggestProduct;
}