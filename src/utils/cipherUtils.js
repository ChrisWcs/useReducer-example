const inRange = x => x > 96 && x < 123
const shiftNum = (x, i) => ( (x + i - 97) % 26 ) + 97 

export const shift = (shiftBy, plainText) => plainText.toLowerCase()
                                                      .split('')
                                                      .map(x => x.charCodeAt(0))
                                                      .map(x => inRange(x) ? shiftNum(x, shiftBy) : x)
                                                      .map(x => String.fromCharCode(x))
                                                      .join('');

export const unShift = (shiftBy, cipherText) => shift( 26 - shiftBy, cipherText);