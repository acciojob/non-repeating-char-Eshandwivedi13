function firstNonRepeatedChar(str) {
  if(str === "") return null;
 let newStr = str.split("").sort().join("");
	let char = str[0];
   for(let ch of str){
	   if(ch != char) return ch;
		char = ch;
   }
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
