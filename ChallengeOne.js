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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    var positivos = 0
    var negativos = 0
    var nulos = 0
    for (let i = -1; i < arr.length; i++) {
        var IndexAtual = arr[i]
        
        if (IndexAtual > 0) {
        positivos = positivos + 1
    }
        if (IndexAtual < 0) {
            negativos = negativos + 1
        }
        if (IndexAtual == 0) {
            nulos = nulos + 1
        }
    }
    var resultadoPos = (positivos / arr.length).toFixed(5);
    var resultadoNeg = (negativos / arr.length).toFixed(5);
    var resultadoNull = (nulos / arr.length).toFixed(5);
    console.log(resultadoPos)
    console.log(resultadoNeg)
    console.log(resultadoNull)
    }

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}