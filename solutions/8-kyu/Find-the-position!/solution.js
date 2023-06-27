// 1

function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let position = alphabet.indexOf(letter) + 1;
    return `Position of alphabet: ${position}`;
}

// 2

function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == letter) {
            return `Position of alphabet: ${i + 1}`;
        }
    }	
}