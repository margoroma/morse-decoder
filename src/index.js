const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newArr = [];
    let newMorse = [];
    for (i = 0; i < expr.length; i += 10) {
        newArr.push(expr.slice(i, i + 10));
    }

    for (x = 0; x < newArr.length; x ++) {
        let srez = newArr[x].slice(newArr[x].indexOf('1'));
        newLett = [];
        if (srez.length > 1) {
            for (y = 0; y < srez.length; y += 2) {
                let spl = srez.slice(y, y + 2);
                if (spl === '10') {
                    spl = '.';
                }
                else if (spl === '11') {
                    spl = '-';
                }
                else if ( spl === "*"){
                    newArr[x].slice(y, y + 2);
                }
                newLett.push(spl);
            }
            newMorse.push(MORSE_TABLE[newLett.join('')]);
        }
        else {
            srez = ' ';
            newMorse.push(srez);
        }
    }
    return newMorse.join('');
}

module.exports = {
    decode
}