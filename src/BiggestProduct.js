function biggestProduct(twoDimArray) {
    if(Array.isArray(twoDimArray) && twoDimArray.length === 0) return 0;
    if(!Array.isArray(twoDimArray) || arguments.length === 0) return undefined;
    let biggest = 0;
    let dimensionCallbacks = [biggestInAllColumns, biggestInAllDiagonals, biggestInAllRows];
    for(let i = 0; i < dimensionCallbacks.length; i++) {
        let current = dimensionCallbacks[i](twoDimArray);
        if(current> biggest ) biggest = current;
    }
    return biggest;
}

function productOf4(w,x,y,z){
    return w * x * y * z;
}

function biggestInRow(row){
    let biggest = 0;
    for(let i = 0; i < row.length - 3 ; i++) {
        let current = productOf4(...row.slice(i, i + 4));
        if(current > biggest) biggest = current;
    }
    return biggest;
}

function biggestInAllRows(twoDimArray) {
    let biggest = 0;
    for(let i = 0; i < twoDimArray.length; i++) {
        let current = biggestInRow(twoDimArray[i]);
        if(current > biggest) biggest = current;
    }
    return biggest;
}

function getColumn(twoDimArray, index){
    let column = [];
    twoDimArray.forEach((row)=> {
        column.push(row[index]);
    })
    return column;
}

function biggestInAllColumns(twoDimArray) {
    twoDimArray = transpose(twoDimArray);
    return biggestInAllRows(twoDimArray);
}

function getDiagonal(matrix, diagonalIndex){
    let diagonal = [];
    for (let i = 0; i <= diagonalIndex && i < matrix.length; i++) {
        diagonal.push(matrix[i][diagonalIndex - i]);
    }
    return diagonal;
}

function transpose(matrix) {
    let transposed = [];
    for(let i = 0; i < matrix[0].length; i++) {
        transposed.push(getColumn(matrix, i));
    }
    return transposed;
}

function biggestInAllDiagonals(matrix) {
    matrix = matrix.length > matrix[0].length? matrix: transpose(matrix);
    let biggest = 0;
    for(let i =3 ; i < matrix.length; i++) {
        let current = biggestInRow(getDiagonal(matrix, i));
        if(current > biggest) biggest = current;
    }
    return biggest;
}