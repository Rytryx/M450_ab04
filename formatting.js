// Funktion, um das letzte Element eines Arrays zurückzugeben
function getLastElement(arr) {
    if (arr.length === 0) {
      return undefined; // Rückgabe von undefined, wenn das Array leer ist
    }
    return arr[arr.length - 1];
  }
  
  // Funktion, um zu überprüfen, ob ein Wort ein Palindrom ist
  function isPalindrome(word) {
    // Entfernen von Leerzeichen und Umwandeln in Kleinbuchstaben für eine einfachere Überprüfung
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');
  
    // Umkehren des Wortes und Vergleichen mit dem ursprünglichen Wort
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  // Funktion, um die ersten Buchstaben jedes Wortes in einem Satz in Großbuchstaben umzuwandeln
  function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  
  // Funktion, um die Länge des längsten Wortes in einem Satz zurückzugeben
  function lengthOfLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
  
    for (const word of words) {
      const wordLength = word.length;
      if (wordLength > maxLength) {
        maxLength = wordLength;
      }
    }
  
    return maxLength;
  }
  
  // Exportieren der Funktionen, damit sie in anderen Dateien verwendet werden können
  module.exports = {
    getLastElement,
    isPalindrome,
    capitalizeWords,
    lengthOfLongestWord,
  };
  