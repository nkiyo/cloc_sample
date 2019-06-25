#!/usr/bin/env node

// Reads JSON from stdin and writes equivalent
// nicely-formatted JSON to stdout.

const stdin = process.stdin
const stdout = process.stdout
const inputChunks = []

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    const inputJSON = inputChunks.join()
    const parsedData = JSON.parse(inputJSON)
    //const outputJSON = JSON.stringify(parsedData, null, '    ')
    let outputJSON
    for(const key in parsedData) {
      const val = parsedData[key]
      //console.log(`### ${key} ${JSON.stringify(val)} hoge`);
      outputJSON[key] = "hoge"
      //for(const vkey in val) {
      //  console.log(`${vkey} hoge`);
      //}
    }
    stdout.write(outputJSON)
    stdout.write('\n')
});

