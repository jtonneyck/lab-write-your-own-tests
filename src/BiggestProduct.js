// write source code here
var matrix = [
    [ 1, 2, 3, 4, 5],
    [ 1, 20, 3, 4, 5],
    [ 1, 20, 3, 4, 5], 
    [ 1, 20, 3, 4, 5],
    [ 1, 3, 3, 4, 5]
];
// iteration1 
function edgecases(mat){
    var emptyArray =[];
    if (mat.length === 0) {
        return 0;
    }    
}
//console.log(edgecases(matrix1));

//iteration2 
function productOf4Numbers(mat){
  let result = 1;
  for (let i= 0; i<mat.length;i++){
    result = result * mat[i];
        }   
  return result;
}


//iteration3
function bigProd1Row(matri){
let result =0; 
    for(let i =0;i<matri.length;i++){
        let arr = productOf4Numbers(matri.slice(i,i+4));
    if (result<arr){
        result = arr;
    }
    }
    return result;
}

//iteration4
function  biggestProductAllrow(mat){
let result = [];
    for(let i =0;i<mat.length;i++){
        for (let j=0;j<mat.length;j++){
         result.push(mat[i][j]); 
        }
    }
return bigProd1Row(result);
}

//iteration 5 
//function biggest product of 1 column 
function  biggestProduct1Column(mat ,col){
    let result = [];
        for(let i =0;i<mat.length;i++){
            for (let j=0;j<mat.length;j++){
            result.push(mat[j][col]); 
            }
        }
    return bigProd1Row(result);
    }


//iteration 6 it just tur column into normal array and we take big product of array
function  biggestProductAllColumn(mat){
    let result = [];
        for(let i =0;i<mat.length;i++){
            for (let j=0;j<mat.length;j++){
                result.push(mat[j][i]); 
            }
        }
    return bigProd1Row(result);
    }

