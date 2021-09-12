const SUPPORTED_OPERATIONS = ['+', '-', '*', '/']

let stack = []

/**
 * Calculate reverse polish notation calculations based on the input String line.
 * @param {*} line A String containing different sets of operations.
 * @returns Returns the final result of the calculation or the last number introduced.
 */
function getTotalRPNResult(line) {

    const isValidInput = validateInput(line)

    if (!isValidInput) {
        return `Please enter a valid RPN operation.`
    }

    const total = calculateTotal(parseInput(line))

    if (Number.isNaN(total)) {
        return `Not a valid operation.`
    }

    return total
}

/**
 * Parse String to Array input and removes empty elements.
 * @param {String} line The input string. 
 * @returns Array: The input converted to array, removing empty elements.
 */
function parseInput(line) {
    return line
        .trim()
        .split(' ')
        .filter(value => value !== '')
}

/**
 * Calculate the reverse polish notation based on a input string.
 * @param {Array} input A RPN format string. i.e: 5 5 5 8 + + - 
 * @returns Returns the total result.
 */
function calculateTotal(input) {
    input.forEach((value) => {
        performRPNOperations(value)
    })

    const result = stack[stack.length - 1]
    return result
}

/**
 * Add a value to a stack until a operator is found.
 * @param {String} value The value to add to stack or operate with.
 */
function performRPNOperations(value) {
    if (isSupportedOperation(value)) {
        const operationResult = performOperation(value, stack[stack.length - 2], stack[stack.length - 1])
        stack.splice(stack.length - 2, 3, operationResult)
    } else {
        stack = [...stack, value]
    }
}

/**
 * Check if a input symbol by is a supported one.
 * @param {String} operation A Mathmatic symbol.
 * @returns Boolean: true if is a valid supported operation.
 */
function isSupportedOperation(operation) {
    return SUPPORTED_OPERATIONS.includes(operation)
}

/**
 * Validates the input for several scenarios. Empty, not numbers or supported operations.
 * @param {String} input The string to evaluate.
 * @returns True / false if is a valid / invalid input.
 */
function validateInput(input) {

    if (!input) {
        return false
    }

    const allCharactersAllowed = parseInput(input)
        .every((value) => (value * 1) || isSupportedOperation(value))

    if (!allCharactersAllowed) {
        return false
    }

    return true
}

/**
 * Given a operation symbol, and 2 String operands, parse to Number 
 * value and perform the neccessary calculations.
 * @param {String} operation The operation symbol of a supported operation.
 * @param {String} firstOperand The first operand.
 * @param {String} secondOperand The second operand.
 * @returns The result of the calculation
 */
function performOperation(operation, firstOperand, secondOperand) {

    const operandOne = parseFloat(firstOperand)
    const operandTwo = parseFloat(secondOperand)

    return {
        '+': operandOne + operandTwo,
        '-': operandOne - operandTwo,
        '*': operandOne * operandTwo,
        '/': operandOne / operandTwo
    }[operation]
}

module.exports = { getTotalRPNResult }