describe("biggest product", function() {
    it("should be a function", function(){
      expect(typeof biggestProduct).toEqual("function");
    })
  it("should return the biggest product of a matrix", function(){
    expect(biggestProduct([2, 20, 20, 20, 4])).toEqual(32000);
  })
});

describe("product of 4 numbers", function() {
  it("should be a function", function(){
    expect(typeof productOf4).toEqual("function");
  })
  it("should return the product of 4 numbers", function(){
    expect(productOf4(1, 2, 3, 4)).toEqual(24);
    expect(productOf4(4, 4, 4, 4)).toEqual(256);
  })
});

describe("biggest product of 1 row", function(){
  it("should be a function", function(){
    expect(typeof biggestProductRow).toEqual("function");
  })
  it("return 0 on empty input", function() {
    expect(biggestProductRow([])).toEqual(0);
  });
  it("should return undefined when something other than an array is passed", function(){
    expect(biggestProductRow("string")).toEqual(undefined);
  })
  it("should return the biggest product of 1 row", function(){
    expect(biggestProductRow([1, 2, 3, 4, 5])).toEqual(120);
    expect(biggestProductRow([5, 6, 6, 6, 6])).toEqual(1296);
  })
});

describe("biggest product of all rows", function(){
  it("should be a function", function(){
    expect(typeof biggestProductAllRows).toEqual("function");
  })
  it("should return the biggest product of all rows", function(){
    expect(biggestProductAllRows(smallMatrix)).toEqual(1200);
  })
});

describe("transpose column to row", function(){
  it("should be a function", function(){
    expect(typeof columnToRow).toEqual("function");
  })
  it("should return the biggest product of all rows", function(){
    expect(columnToRow(smallMatrix, 0)).toEqual([1, 1, 1, 1, 1]);
    expect(columnToRow(smallMatrix, 1)).toEqual([2, 20, 20, 20, 4]);
    expect(columnToRow(smallMatrix, 2)).toEqual([3, 3, 3, 3, 3]);
  })
});

// describe("biggest product of 1 column", function(){
//   it("should be a function", function(){
//     expect(typeof biggestProductColumn).toEqual("function");
//   })
//   it("should return the biggest product of a column", function(){
//     // expect(biggestProductColumn([2, 20, 20, 20, 4])).toEqual(32000);
//     expect(biggestProductColumn([1, 2, 3, 4, 5])).toEqual(120);
//   })
// });

describe("biggest product of all column", function(){
  it("should be a function", function(){
    expect(typeof biggestProductAllColumns).toEqual("function");
  })
  it("should return the biggest product of all column", function(){
    expect(biggestProductAllColumns(smallMatrix)).toEqual(32000);
  })
});
