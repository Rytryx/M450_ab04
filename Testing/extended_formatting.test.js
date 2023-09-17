const {
    uniqueValues,
    letterFrequency,
    sortByKey,
    deepClone,
    intersection,
    divide,
  } = require('./extended_formatting.js');
  
  // Test Suite für die Funktion uniqueValues
  describe('uniqueValues Funktion', () => {
    test('Ein Array ohne Duplikate sollte unverändert bleiben', () => {
      const inputArray = [1, 2, 3, 4, 5];
      const result = uniqueValues(inputArray);
      expect(result).toEqual(inputArray);
    });
  
    test('Ein Array mit Duplikaten sollte zu einem Array ohne Duplikate werden', () => {
      const inputArray = [1, 2, 2, 3, 4, 4, 5];
      const result = uniqueValues(inputArray);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });
  
  // Test Suite für die Funktion letterFrequency
  describe('letterFrequency Funktion', () => {
    test('Häufigkeit der Buchstaben in einem Wort zählen', () => {
      const word = 'hello';
      const result = letterFrequency(word);
      expect(result).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });
  });
  
  // Test Suite für die Funktion sortByKey
  describe('sortByKey Funktion', () => {
    test('Objekte nach einem Schlüssel sortieren', () => {
      const inputArray = [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const result = sortByKey(inputArray, 'age');
      expect(result).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'John', age: 30 },
        { name: 'Bob', age: 35 },
      ]);
    });
  });
  
  // Test Suite für die Funktion deepClone
  describe('deepClone Funktion', () => {
    test('Ein tiefes geklontes Objekt sollte identisch sein', () => {
      const obj = { a: 1, b: { c: 2 } };
      const result = deepClone(obj);
      expect(result).toEqual(obj);
    });
  });
  
  // Test Suite für die Funktion intersection
  describe('intersection Funktion', () => {
    test('Schnittmenge von zwei Arrays finden', () => {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [3, 4, 5, 6, 7];
      const result = intersection(arr1, arr2);
      expect(result).toEqual([3, 4, 5]);
    });
  });

  // Test Suite für die Funktion divide
  describe('divide Funktion', () => {
    test('Positive Division von zwei Zahlen', () => {
      expect(divide(10, 2)).toBe(5);
    });
  
    test('Division durch 0 sollte einen Fehler werfen', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Ungültige Eingabe: a und b müssen Zahlen sein, und b darf nicht 0 sein.');
    });
  
    test('Division mit einem ungültigen Eingabetyp sollte einen Fehler werfen', () => {
      expect(() => {
        divide('abc', 5);
      }).toThrow('Ungültige Eingabe: a und b müssen Zahlen sein, und b darf nicht 0 sein.');
    });
  });