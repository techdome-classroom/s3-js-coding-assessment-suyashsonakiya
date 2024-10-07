/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    // A mapping of closing to opening brackets
    const matchingPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Iterate over each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push it to the stack
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } 
        // If it's a closing bracket, check if it matches the last opened bracket
        else if ([')', ']', '}'].includes(char)) {
            // Pop from stack and check if it matches
            if (stack.pop() !== matchingPairs[char]) {
                return false; // Return false on mismatch
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };


