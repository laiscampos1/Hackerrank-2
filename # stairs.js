'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
   for (let i = 1; i <= n; i++){
    let linha = ' ';

    for (let j = 1; j <= n - i; j++) {
        linha += ' ';
      }

      // Adiciona as hashtags
      for (let k = 1; k <= i; k++) {
        linha += '#';
      }
      console.log(linha);
    }
  }
   


