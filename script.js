// alert('hello')

const str = 'Your PIN number is 2020'

function charCount(str){
    // make the object
    const result = {}
    // loop the object
    // for(let char of str) {
    //    char = str.toLowerCase(); // return the first character

    for(let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); // return the first character
        // add the number of character in the property
        if(result[char] > 0){
            result[char]++;
        }
        else{
            // if the letter does not exist, it will add one for it
            result[char] = 1
        }
    }
    return console.log(result)
}
charCount("Hi there!")