// function to check the biggest product on one row
function biggestProductOnOneRow(anArray){
    let biggestRun = 0;
    let latestRun = 0;
    if (anArray.length === 0){
        return biggestRun = 0;
    } else {
        if (anArray.length > 4) {
            for (let i = 0; i < anArray.length - 3; i++) {
                latestRun = anArray[i] * anArray[i + 1] * anArray[i + 2] * anArray[i + 3];
                if (latestRun >= biggestRun) {
                    biggestRun = latestRun;
                }
            }
        } else {
            latestRun = anArray[0] * anArray[1] * anArray[2] * anArray[3];
            if (latestRun >= biggestRun) {
                biggestRun = latestRun;
            }
        }
    }
    return biggestRun;
}

// function to check the biggest products for the rows
function biggestOnAllRows(anMatrix) {
    let biggestRun = 0;
    let latestRun = 0;
    if (anMatrix.length === 0) {
        return biggestRun = 0;
    } else {
        for (let i = 0; i < anMatrix.length ; i++) {
            latestRun = biggestProductOnOneRow(anMatrix[i]);
            if (latestRun >= biggestRun) {
                biggestRun = latestRun;
            }
        }
        return biggestRun;
    }
}

// function to transform columns to rows
function columnToRow(anMatrix, cIndex) {
    let columnsToRows = [];
    for (let i = 0; i < anMatrix.length; i++) {
        columnsToRows.push(anMatrix[i][cIndex]);
    }
    return columnsToRows;
}

// function to check the biggest products for the columns
function biggestOnAllColumns(anMatrix) {
    let biggestRun = 0;
    let columnsToRows = [];
    for (let i = 0; i < anMatrix.length; i++){
       columnsToRows.push(columnToRow(anMatrix, i));
    }
    biggestRun = biggestOnAllRows(columnsToRows);
    return biggestRun;
}

// function to transform left to right diagonals to rows
function diagonalLeftToRightToRow(anMatrix) {
    let diagonalsToRows = [];
    for (let row = 0; row < anMatrix.length - 3; row++) {
        for (let col = 3; col < anMatrix[row].length; col++) {
            diagonalsToRows.push([anMatrix[row][col], anMatrix[row + 1][col - 1], anMatrix[row + 2][col - 2], anMatrix[row + 3][col - 3]]);
        }
    }
    return diagonalsToRows;
}

// function to check the biggest products diagonals from left to right
function biggestOnLeftToRightToRow(anMatrix) {
    let biggestRun = 0;
    let toRows = diagonalLeftToRightToRow(anMatrix);
    biggestRun = biggestOnAllRows(toRows);
    return biggestRun;
}

// function to transform right to left diagonals to rows
function diagonalRightToLeftToRow(anMatrix) {
    let diagonalsToRows = [];
    for (let col = 0; col < anMatrix.length - 3; col++) {
        for (let row = 3; row < anMatrix[col].length; row++) {
            diagonalsToRows.push([anMatrix[row][col], anMatrix[row - 1][col + 1], anMatrix[row - 2][col + 2], anMatrix[row - 3][col + 3]]);
        }
    }
    return diagonalsToRows;
}

// function to check the biggest products diagonals from right to left
function biggestOnRightToLeftToRow(anMatrix) {
    let biggestRun = 0;
    let toRows = diagonalRightToLeftToRow(anMatrix);
    biggestRun = biggestOnAllRows(toRows);
    return biggestRun;
}

// function to check the biggest adjacent of the full matrix
function biggestOnFullMatrix(anMatrix) {
    let biggestAdjacent = 0;
    biggestAdjacent = Math.max(biggestOnAllRows(anMatrix), biggestOnAllColumns(anMatrix), biggestOnLeftToRightToRow(anMatrix), biggestOnRightToLeftToRow(anMatrix));
    return biggestAdjacent;
}

// The matrix to test
const smallMatrix = [
    [1, 2, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
];

biggestOnFullMatrix(smallMatrix);
