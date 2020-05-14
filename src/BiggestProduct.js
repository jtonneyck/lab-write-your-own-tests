// function to check the biggest product on one row
function biggestProductOnOneRow(anArray){
    let biggestRun = 0;
    let latestRun = 0;
    if (anArray.length === 0){
        return biggestRun = 0;
    } else {
        for (let i = 0; i < anArray.length-3; i++){
            latestRun = anArray[i] * anArray[i + 1] * anArray[i + 2] * anArray[i + 3];
            if (latestRun > biggestRun){
                biggestRun = latestRun;
            } 
        }
        return biggestRun;
    }
}

// function to check the biggest products for the rows
function biggestOnAllRows(anMatrix) {
    let biggestRun = 0;
    let latestRun = 0;
    if (anMatrix.length === 0) {
        return biggestRun = 0;
    } else {
        for (let i = 0; i < anMatrix.length - 3; i++) {
            latestRun = biggestProductOnOneRow(anMatrix[i]);
            if (latestRun > biggestRun) {
                biggestRun = latestRun;
            }
        }
        return biggestRun;
    }
}

// function to check the biggest products for the columns
function biggestOnAllColums(anMatrix) {
    let biggestRun = 0;
    let columnsToRows = [];
    for (let i = 0; i < anMatrix.length; i++){
       columnsToRows.push(columnToRow(anMatrix, i));
    }
    console.log(columnsToRows);
    biggestRun = biggestOnAllRows(columnsToRows);
    return biggestRun;
}

// function to transform columns to rows
function columnToRow(anMatrix, cIndex) {
    let columnsToRows = [];
    for (let i = 0; i < anMatrix.length; i++){
        columnsToRows.push(anMatrix[i][cIndex]);
    }
    return columnsToRows;
}

const smallMatrix = [
    [1, 2, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
];