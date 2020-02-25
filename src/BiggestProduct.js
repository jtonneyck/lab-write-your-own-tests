// biggest product in the entire matrix
function biggestProduct(arr) {
   if (arr.length === 0) {
    return 0;
   } else if (!Array.isArray(arr)){
    return undefined 
   } 
}     

// product of 4 elements
function aProductOf4(n1,n2,n3,n4) {
    return n1 * n2 * n3 * n4
}

// biggest product in 1 row of the matrix
function biggestProduct1Row(arr) {
    var currentBiggestProduct = 0;
    for (var i=0; i<arr.length - 3; i++) {
        if(currentBiggestProduct < aProductOf4(arr[i],arr[i+1],arr[i+2],arr[i+3])) {
            currentBiggestProduct = aProductOf4(arr[i],arr[i+1],arr[i+2],arr[i+3]);
        }
    }
    return currentBiggestProduct; 
}

// biggest product for all the rows
function biggestProductAllRows(arr) {
    var biggestProductOfAllRows = 0;
    for (var j=0; j<arr.length; j++) {
        let currentBiggestProduct = biggestProduct1Row(arr[j])
        if(biggestProductOfAllRows < currentBiggestProduct) {
            biggestProductOfAllRows = currentBiggestProduct;
        }
    }
    return biggestProductOfAllRows
}

// //transpose a matrix
// function transposematrix(aMatrix,index){
//     matrixTransposed = [];   
//     for (var i=0; i<aMatrix.length; i++) {
//         matrixTransposed.push(aMatrix[i][index]) 
//     }
//     return matrixTransposed
// }

// //biggest product for all the columns
// function biggestProductAllColumns(arr) {
//     transpose()
// }