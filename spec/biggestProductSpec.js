//iteration1
describe("biggest product", function() {
  it("return 0 on empty input", () => {
    expect(edgecases([])).toEqual(0);
  });
});

  //iteration2

describe("product of 4 numbers", function() {
  it('should return the product of 4 numbers that are passed to it', () => {
    expect(productOf4Numbers(1,1,1,1)).toEqual(1);
  
  });
  
});

//iteration3
describe("biggest product for 1 row", function() {
  it('should return the product of 4 numbers that are passed to it', () => {
    expect(bigProd1Row([1,20,3,4,5])).toEqual(1200);
  });
});


//iteration4
describe("biggest product for all row", function() { 
  it('should return the product of 4 numbers that are passed to it', () => {
    expect(biggestProductAllrow(matrix)).toEqual(1200);
  });
});

//iteration5
describe("biggest product for one column", function() {
  it('should return the product of 4 numbers that are passed to it', () => {
    expect(biggestProduct1Column(matrix, 1)).toEqual(24000);
  });
});

//iteration6
describe("biggest product for one column", function() {
  it('should return the product of 4 numbers that are passed to it', () => {
    expect(biggestProductAllColumn(matrix)).toEqual(24000);
  });
});