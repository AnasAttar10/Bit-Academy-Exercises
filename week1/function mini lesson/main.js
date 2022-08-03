const story = 
"In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

function countTheUniqueWords(){
    let smallLetterString = tolowerCase(story)
    let removeSpecialCharsString = removeSpecalLetter(smallLetterString)
    let ConvertStringToArray = removeSpecialCharsString.split(" ")
    for (const word of ConvertStringToArray) {
       if( ! CheckExsist(wordCounts , word))
        {
           let count =  countWords(ConvertStringToArray , word)
           wordCounts[word]=count
        }
    }

}

countTheUniqueWords()


for (const [key ,value] of Object.entries(wordCounts)) {
    console.log(key,value);
}

function tolowerCase(str){
    return str.toLowerCase()
}

function removeSpecalLetter(str){
    for (const char of specialChars) {
        str=str.split(char).join("")
    }
    return str
}

function countWords (wordsArr , targetWord){

    let count=0 

    for (const word of wordsArr) {
        if(word === targetWord)
        {
            count++
        }
    }
    return count 
}

function CheckExsist (Objectkeys , newkey){
    return  newkey in Objectkeys 
}
