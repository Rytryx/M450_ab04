// Funktion, um ein neues Array mit eindeutigen Werten aus dem ursprünglichen Array zurückzugeben
function uniqueValues(arr) {
    return [...new Set(arr)];
  }
  
  // Funktion, um die Häufigkeit jedes Buchstabens in einem Wort zu zählen
  function letterFrequency(word) {
    const frequency = {};
    for (const letter of word) {
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }
    return frequency;
  }
  
  // Funktion, um ein Array von Objekten nach einem bestimmten Schlüssel zu sortieren
  function sortByKey(arr, key) {
    return arr.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  
  // Funktion, um ein tief geklontes Objekt zurückzugeben
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Funktion, um ein Array mit Werten zurückzugeben, die in beiden Eingabe-Arrays vorkommen
  function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }

  function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
      throw new Error('Ungültige Eingabe: a und b müssen Zahlen sein, und b darf nicht 0 sein.');
    }
    return a / b;
  }
  
  // Exportieren der Funktionen, damit sie in anderen Dateien verwendet werden können
  module.exports = {
    uniqueValues,
    letterFrequency,
    sortByKey,
    deepClone,
    intersection,
    divide,
  };
  