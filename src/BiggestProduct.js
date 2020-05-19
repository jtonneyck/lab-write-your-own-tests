function biggestProduct(matrix) {
  if (matrix.length === 0) return 0;

  if (Array.isArray(matrix)) {
    let biggestProduct = biggestProductRows(matrix);
    let biggestProductColumn = biggestProductColumns(matrix);

    return biggestProductColumn > biggestProduct
      ? biggestProductColumn
      : biggestProduct;
  }
}

function biggestProduct4Numbers(n1, n2, n3, n4) {
  return n1 * n2 * n3 * n4;
}

function biggestProductRowOrColumn(row) {
  let greatestProduct = 1;

  for (let i = 0; i < row.length; i++) {
    if (i + 4 > row.length) break;

    product = biggestProduct4Numbers(
      row[i],
      row[i + 1],
      row[i + 2],
      row[i + 3]
    );

    if (product > greatestProduct) {
      greatestProduct = product;
    }
  }
  return greatestProduct;
}

function biggestProductRows(matrix) {
  let greatestProductRow = 1;
  for (let i = 0; i < matrix[0].length; i++) {
    let product = biggestProductRowOrColumn(matrix[i]);

    if (product > greatestProductRow) {
      greatestProductRow = product;
    }
  }
  return greatestProductRow;
}

function biggestProductColumns(matrix) {
  let columnConvertedArr = convertColumnsToRows(matrix);
  let biggestProductColumn = biggestProductRows(columnConvertedArr);
  return biggestProductColumn;
}

function convertColumnsToRows(matrix) {
  let columnArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    columnArray.push(arrayColumn(matrix, i));
  }
  return columnArray;
}

function arrayColumn(arr, n) {
  return arr.map((x) => x[n]);
}
