function fibonacci(n) {
    // Handle base cases
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var a = 0; // First Fibonacci number
    var b = 1; // Second Fibonacci number
    var result = 0;
    // Loop from 2 to n and compute the series iteratively
    for (var i = 2; i <= n; i++) {
        result = a + b; // Current Fibonacci number
        a = b; // Move 'b' to 'a'
        b = result; // Update 'b' to new result
    }
    return result;
}
// Example calls
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610
