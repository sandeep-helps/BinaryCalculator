function calculate() {
    const bin1 = document.getElementById('binary1').value;
    const bin2 = document.getElementById('binary2').value;
    const operation = document.getElementById('operation').value;

    // Convert binary inputs to decimal
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    // Convert result back to binary and display
    const binaryResult = result.toString(2);
    document.getElementById('result').innerText = `Result: ${binaryResult}`;
}