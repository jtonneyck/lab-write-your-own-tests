let testMatrix = [
    [ 1, 2, 3, 4, 5],
    [ 1, 20, 3, 4, 5],
    [ 1, 20, 3, 4, 5],
    [ 1, 20, 3, 4, 5],
    [ 1, 4, 3, 4, 5]
]

// Iteration 1
function biggestProduct (matrix) {
    if (matrix.length === 0) return 0;
};

function productOf4Nums (num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
};

function biggestOfArr (anyRow) {
    let p = 1;
    for (let i = 0; i < anyRow.length; i++) {
        p *= anyRow[i]
    }
    return p;
};

// Iteration 2
function biggestOfAll (row1, row2) {
    let pRow1 = biggestOfArr(row1);
    let pRow2 = biggestOfArr(row2);
    if (pRow1 >= pRow2) {
        return pRow1
    } else if (pRow1 < pRow2) {
        return pRow2
    };
};

// Biggest product in columns