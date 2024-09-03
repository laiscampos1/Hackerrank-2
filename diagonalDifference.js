function diagonalDifference(arr) {
    const n = arr.length;
    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;
  
    for (let i = 0; i < n; i++) {
      diagonalPrincipal += arr[i][i];
      diagonalSecundaria += arr[i][n - i - 1];
    }
  
    return Math.abs(diagonalPrincipal - diagonalSecundaria);
  }