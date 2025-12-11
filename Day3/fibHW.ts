

function fibonacci(n: number): number {

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0; 
    let b = 1; 
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = a + b; 
        a = b;          
        b = result;     
    }

    return result;
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(5));  
console.log(fibonacci(10)); 
console.log(fibonacci(15)); 
