const longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu")
const arrayWords = longestWord.split(" ");
let biggerWord = [];

for(let word of arrayWords){
    console.log(word.length, word)
    if (word.length > biggerWord.lenght){
        biggerWord.push(word)
    }
}
console.log (biggerWord)
