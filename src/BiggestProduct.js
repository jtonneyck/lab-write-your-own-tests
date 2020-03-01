// write source code here
//function biggestProduct(){
//
//}

//The product of four numbers
function fourProduct(a,b,c,d){
    let product= a*b*c*d;
    return product;
  
}

//Biggest product of four numbers
function biggestOf4inARow (myArray){
      if(myArray.length ===0){
          return 0;
      }else{
        let currentMax = 0;
        for(var i =0;i+3<myArray.length;i++){
            let currentProduct = fourProduct(myArray[i],myArray[i+1],myArray[i+2],myArray[i+3]); 
            if(currentProduct>currentMax){
                currentMax=currentProduct;
            }
        };    
        return currentMax;
      };
}

//Biggest Product for All the rows
function biggestForAllRows (matrix){
    let max=0;
    for(var i = 0;i<matrix.length ;i++){
        let biggestinRow = biggestOf4inARow(matrix[i]);
        if(biggestinRow>max){
            max= biggestinRow;
        }
    }
    return max;    
}



function transposeColumn(matrix){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(matrix[i][j]);
        };
    };

    return newArray;
}

//function biggestOf4inAColumn(array){
//    let flipMatrix = transposeMatrix(array);
//   let biggestColumnProduct = biggestOf4inARow(flipMatrix);
//    return biggestColumnProduct;
//}


function largestProdColumn(column){
        let row = transposeColumn(column);
        let biggestProduct=row.biggestOf4inARow();
        return biggestProduct;
        }

function 

}
