function firstNonRepeatedChar(str) {
  let counts = {};//object is working as freqArr or HashSet
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        counts[char] = counts[char] ? counts[char] + 1 : 1;//if already exists, incr value..otherWise insert 1
    }
    for(let i = 0; i < str.length; i++){
        if(counts[str[i]] === 1){//whichever character in obj has value 1, return it
            return str[i];
        }
    }
    return null;
}  
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
