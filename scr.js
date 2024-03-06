function countVowels(inputString) {
    const vowels = "aeiouyAEIOUY";
    let count = 0;
    for (let char of inputString) {
        if (vowels.includes(char)) {
            count++;
            console.log(char)
        }
    }
    return count;
}
const userInput = prompt("Введіть слово на англійській мові:");
const vowelCount = countVowels(userInput);
alert("Кількість голосних у введеному слові:" + vowelCount);