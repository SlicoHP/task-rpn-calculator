
const { getTotalRPNResult } = require('./rpncalculator.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
rl.prompt();

rl.on('line', (line) => {

    if (line.trim().toLowerCase() === 'q') {
        rl.close()
    }

    const result = getTotalRPNResult(line)
    console.log(result)

    rl.prompt();
});

rl.on('close', () => {
    console.log('Exit. Thank you for using my RPN calculator!');
    process.exit(0);
});