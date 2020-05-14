// write source code here
function biggestProduct(matrix){
    if(matrix.length===0)return 0;
    
}
function fourNumberProduct(matrix){
    if(matrix.length===0)return 0;
    let product = 1;
    for (let i = 0; i < matrix.length; i++) {
        product *= matrix[i];
    }
    return product
}
function biggestProductOneRow(matrix) {
    if(matrix.length===0)return 0;
    let biggestProduct = 0
    for (let i = 0; i < matrix.length; i++) {
        let fourNumbers = matrix.slice(i,i+4)
        if (fourNumbers.length=4) {
            let product = fourNumberProduct(fourNumbers)
            if(product>biggestProduct){
                biggestProduct=product
            }
        }
    }
   return biggestProduct
}
function biggestProductAllRows(matrix){
    let product = 0
    for (let i = 0; i < matrix.length; i++) {
        let biggestProduct = biggestProductOneRow(matrix[i])
        if (biggestProduct>product) product=biggestProduct
    }
    return product
}
function getCol(matrix, col){
    var column = [];
    for(var i=0; i<matrix.length; i++){
       column.push(matrix[i][col]);
    }
    return column;
 }
 function biggestProductColumn(matrix){
    column = getCol(matrix, 0)
    return biggestProductOneRow(column)
    
 }


function biggestProductAllColumns(matrix){
    let column = []
    for (let i = 0; i < matrix.length; i++) { 
       let newColumn = getCol(matrix,i)
       let newColumnProduct = biggestProductOneRow(newColumn)
       let oldColumnProduct = biggestProductOneRow(column)
       if (newColumnProduct>oldColumnProduct) column = newColumn
       
    }
    return biggestProductOneRow(column)
  
}
