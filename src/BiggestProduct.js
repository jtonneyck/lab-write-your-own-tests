// write source code here
function biggestProduct(twoDimArray) {
    if(Array.isArray(twoDimArray) && twoDimArray.length === 0) return 0;
    if(!Array.isArray(twoDimArray) && arguments.length === 0) return undefined;
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