//1. Trouver le mot le plus long 

const findLongestWord = (wordArray) => {
    let { length: longestLength, word: longestWord } = wordArray.map(word => ({ word, length: word.length }))
                                                              .reduce((prev, current) => (current.length > prev.length) ? current : prev);
  
    return { longestWord, longestLength };
  };
  
  // Exemple:
  const wordsArray = ["apple", "banana", "grape", "kiwi"];
  const result = findLongestWord(wordsArray);
  console.log(result);
  //2. Compter les occurrences d'éléments distincts 
  
const countOccurrences = (arrayOfArrays) => {
    const flattenedArray = arrayOfArrays.flat();
    const result = flattenedArray.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    
    return result;
  };
  
  // Exemple 
  const inputArray = [["apple", "banana"], ["banana", "kiwi"], ["kiwi", "orange"]];
  const output = countOccurrences(inputArray);
  console.log(output);
 // 3. Calculer le total des notes avec bonus 
 
const calculateTotalWithBonus = (grades) => {
    const bonus = 15;
  
    const total = grades.map(grade => (grade < 50) ? grade + bonus : grade)
                       .filter(grade => grade > 50)
                       .reduce((acc, val) => acc + val, 0);
  
    return total;
  };
  
  // Exemple 
  const studentGrades = [45, 60, 30, 75];
  const totalWithBonus = calculateTotalWithBonus(studentGrades);
  console.log(totalWithBonus);
  //4.
  let lastUsedID = 1; 

const Tab = [
  { name: "Objet 1", value: 10 },
  { name: "Objet 2", value: 20 },
  { name: "Objet 3", value: 30 }
];

const addEntry = (obj) => {
  obj.ID = lastUsedID++;
  Tab.push(obj);
};

// Exemple 
addEntry({ name: "Nouvel objet", value: 40 });
console.log(Tab);

// 
export const searchById = (id) => {
  return Tab.find(obj => obj.ID === id);
};
