const {
    getLastElement,
    isPalindrome,
    capitalizeWords,
    lengthOfLongestWord,
  } = require('./formatting.js');
  
  // Test für getLastElement-Funktion
  test('getLastElement gibt das letzte Element eines Arrays zurück', () => {
    const arr = [1, 2, 3];
    expect(getLastElement(arr)).toBe(3);
  });
  
  // Test für isPalindrome-Funktion
  test('isPalindrome erkennt ein Palindrom', () => {
    const word = 'racecar';
    expect(isPalindrome(word)).toBe(true);
  });
  
  // Test für capitalizeWords-Funktion
  test('capitalizeWords wandelt die ersten Buchstaben in Großbuchstaben um', () => {
    const sentence = 'hello world';
    expect(capitalizeWords(sentence)).toBe('Hello World');
  });
  
  // Test für lengthOfLongestWord-Funktion
  test('lengthOfLongestWord gibt die Länge des längsten Wortes zurück', () => {
    const sentence = 'This is a sample sentence.';
    expect(lengthOfLongestWord(sentence)).toBe(9); // "sentence." ist das längste Wort mit 8 Buchstaben
  });
  