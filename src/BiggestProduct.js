function biggestProduct(arr){
    if (arr.length === 0){
        return 0;
    } else if (Array.isArray(arr)) {
        
    } else {
        return "undefined";
    }
}

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

