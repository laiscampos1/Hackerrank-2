function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {

        let jogosComprados = 0;
        while (s >= p && p >= m) {
          s -= p; 
          jogosComprados++; 
          p -= d; 
        }
        return jogosComprados;
      }

