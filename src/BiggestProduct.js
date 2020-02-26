

function productOf4(arr){
    if (arr.length === 0) return 0;
    if(Array.isArray(arr)){
        let product = 1;
        for(let i = 0; i<arr.length; i++){
            product *= arr[i];
        }
        return product;
    } else {
        return "undefined";
    }
}

function biggestPrdOfRow(row){
    if (row.length === 0) return 0;
    if(Array.isArray(row)){
        let biggestPrd = 0;
        for  (let i=0 ; i<=(row.length-4); i++){
            let fourArr = row.slice(i, i+4);
            let pdr4 =productOf4(fourArr);
            if( pdr4 > biggestPrd) biggestPrd = pdr4;
        }
        return biggestPrd;

    } else {
        return "undefined";
    }
}

function bigPrdOfAllRows(matrix){
    if (matrix.length === 0) return 0;
    if(Array.isArray(matrix)){
        let bigPrdAllRows = 0;
        for( i = 0; i<matrix.length; i++){
            let rowProduct = biggestPrdOfRow(matrix[i]);
            if ( rowProduct > bigPrdAllRows) bigPrdAllRows = rowProduct;
        }
        return bigPrdAllRows;
    } else {
        return "undefined";
    }
};

function transposeCol(matrix, index){
    if (matrix.length === 0) return 0;
    if(Array.isArray(matrix)){
        let transposedRow = [];
        for(i=0; i<matrix.length; i++){
            transposedRow.push(matrix[i][index]);
        }
        return transposedRow;
    
    } else {
        return "undefined";
    }
}

function transposedMatrix(matrix){
    let transMatrix = [];
    
    for(let i = 0; i< matrix.length; i++){
        transMatrix.push(transposeCol(matrix, i));
    }
    return transMatrix;
}





function biggestProduct(matrix){
    if (matrix.length === 0){
        return 0;
    } else if (Array.isArray(matrix)) {
        let biggestProductOfRows = bigPrdOfAllRows(matrix);
        let trnsMatrix = transposedMatrix(matrix);
        let biggestProductOfCol = bigPrdOfAllRows(trnsMatrix);
        if (biggestProductOfRows >= biggestProductOfCol){
            return biggestProductOfRows;
        } else {
            return biggestProductOfCol;
        }
    } else {
        return "undefined";
    }
}

