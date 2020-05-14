function biggestProduct(matrix){
    if (matrix.length < 4) return 0;
    let biggestProduct = 0;
    let biggestColumn = biggestAllColumns(matrix);
    let biggestRow = biggestAllRows(matrix);
    let biggestDiagonal = diagonalAdjacent(matrix);
    if (biggestColumn > biggestRow){
        biggestProduct = biggestColumn;
    } else biggestProduct = biggestRow;
    if (biggestDiagonal > biggestProduct){
        biggestProduct = biggestDiagonal;
    }
    return biggestProduct;
}

function calculateProduct(num1,num2,num3,num4){
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Invalid input');
    }
    return num1 * num2 * num3 * num4;
}

function biggestInArray(arr){
    let productArray = 0;
    let biggestProductArray = 0;
    for (let r=3; r<arr.length;r++){
        productArray = calculateProduct(arr[r],arr[r-1],arr[r-2],arr[r-3]);
        if (productArray  > biggestProductArray){
            biggestProductArray = productArray;
        }
    }
    return biggestProductArray;
}

function biggestAllRows(matrix){
    let biggestProductRow = 0;
    let biggestAllRows = 0;
    for (let x=0; x<matrix[0].length;x++){
        biggestProductRow = biggestInArray(matrix[x]);
        if (biggestProductRow > biggestAllRows){
            biggestAllRows = biggestProductRow;
        }
    }
    return biggestAllRows;
}

function biggestAllColumns(matrix) {
    let column = 0;
    let biggestAllColumns = 0;
    for (let x=0;x<matrix[0].length;x++){
        let columnArray = [];
        for (let y=0;y<matrix.length;y++){
            columnArray.push(matrix[y][x]);
        }
        column = biggestInArray(columnArray);
        if (column > biggestAllColumns){
            biggestAllColumns = column;
        }
    }
    return biggestAllColumns; 
}

function diagonalAdjacentTopRight(matrix){
    let lastX = matrix[0].length-1;
    let adjacentArray = [matrix[0][lastX],matrix[1][lastX-1],matrix[2][lastX-2],matrix[3][lastX-3]];
    return biggestInArray(adjacentArray);
}

function diagonalAdjacent(matrix){
    let biggestAllDiagonals = 0;
    // DIAGONAL TO THE LEFT
    for (let y = 0; y < (matrix.length-3); y++) {
      for (let x = 3; x < matrix[y].length; x++) {
        let fourDiagLeft = matrix[y][x] * matrix[y+1][x-1] * matrix[y+2][x-2] * matrix[y+3][x-3];
        if (fourDiagLeft > biggestAllDiagonals) {
          biggestAllDiagonals  = fourDiagLeft;
        }
      }
    }
    // DIAGONAL TO THE RIGHT
    for (let y = 0; y < (matrix.length-3); y++) {
        for (let x = 0; x < matrix[y].length-3; x++) {
            let fourDiagRight = matrix[y][x] * matrix[y+1][x+1] * matrix[y+2][x+2] * matrix[y+3][x+3];
            if (fourDiagRight > biggestAllDiagonals) {
                biggestAllDiagonals = fourDiagRight;
            }
        }
    }
    return biggestAllDiagonals; 
}

