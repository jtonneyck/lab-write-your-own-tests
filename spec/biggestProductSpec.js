// describe("biggest product", function() {

//     it("return 0 on empty input", function() {
//         expect(biggestProduct([])).toEqual(0);
//         I
//     });

//     it("return a number on not empty input", function() {
//         expect(typeof biggestProduct(matrix)).toEqual("number");
//     });
// });

// describe("product of 4 numbers", function() {
//     it("returns the product of 4 numbers that are passed to the function", function() {

//     });

// });

// write other tests here

describe("biggestProduct", function() {
    it('should be defined', () => {
        expect(typeof biggestProduct).toEqual("function")
    });
})

describe('productOf4', () => {
    it("should be defined", () => {
        expect(typeof productOf4).toEqual("function");
    })

    it('should return the correct product', () => {
        expect(productOf4(1, 1, 1, 1)).toEqual(1);
        expect(productOf4(1, 9, 9, 1)).toEqual(81);
        expect(productOf4(2, 2, 2, 2)).toEqual(16);
        expect(productOf4(5, 5, 5, 1)).toEqual(125);
    });
});

describe('biggestInRow', () => {
    it('should be defined', () => {
        expect(typeof biggestInRow).toEqual("function");
    });
    it('should return the biggest product of 4 in a row', () => {
        expect(biggestInRow([1, 1, 1, 1, 9])).toEqual(9);
        expect(biggestInRow([1, 5, 5, 1, 9])).toEqual(225);
        expect(biggestInRow([20, 100, 1, 1, 1, 9])).toEqual(2000);
    });
})

var matrixA = [
    [1, 2, 3, 4, 5],
    [1, 20, 3, 4, 5], // 1200
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
]

var matrixB = [
    [1, 2, 3, 4, 5],
    [1, 20, 100, 4, 5], // => 40000
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
]

var matrixC = [
    [1, 2, 3, 4, 5],
    [1, 20, 100, 4, 5], // => 40000
    [1, 20, 100, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
]

// => 90000
describe('biggestInAllRows', () => {
    it('should be defined', () => {
        expect(typeof biggestInAllRows).toEqual("function");
    });

    it("should return the biggest product of 4 in all rows", () => {
        expect(biggestInAllRows(matrixA)).toEqual(1200);
        expect(biggestInAllRows(matrixB)).toEqual(40000);
    })
});

describe("getColumn", () => {
    it("should be defined", () => {
        expect(typeof getColumn).toEqual("function");
    })

    it('should return the correct column', () => {
        // expect(Array.isArray(getColumn(matrixA, 0)).toEqual(true); 
        expect(getColumn(matrixA, 0)).toEqual([1, 1, 1, 1, 1]);
        expect(getColumn(matrixA, 1)).toEqual([2, 20, 20, 20, 4]);
        expect(getColumn(matrixA, 2)).toEqual([3, 3, 3, 3, 3]);
        expect(getColumn(matrixB, 4)).toEqual([5, 5, 5, 5, 5]);
    });
})

describe("biggestInAllColumns", () => {
    it('should be defined', () => {
        expect(typeof biggestInAllRows).toEqual("function");
    });
    it('should return the biggest product of 4 in all columns', () => {
        expect(biggestInAllColumns(matrixA)).toEqual(32000);
        expect(biggestInAllColumns(matrixB)).toEqual(32000);
        expect(biggestInAllColumns(matrixC)).toEqual(90000);
    });
})
describe('biggestProduct', () => {
    it("should be defined", () => {
        expect(typeof biggestProduct).toEqual("function");
    });
    it('should return the biggest product of 4 in all columns', () => {
        expect(biggestProduct(matrixA)).toEqual(32000);
        expect(biggestProduct(matrixB)).toEqual(40000);
        expect(biggestProduct(matrixC)).toEqual(90000);
    });

});