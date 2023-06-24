// 1

function squareDigits(num) {
    let res = '';
    const numString = num.toString();
    
    for (let i = 0; i < numString.length; i++) {
        res += Math.pow(numString[i], 2);
    }
    return +res;
}

// 2

const squareDigits = (num) => +num.toString().split('').map(i => i * i).join('');