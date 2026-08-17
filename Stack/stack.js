let stack = [];
let word = "ABCDEFGH";
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reverseWord = reverseWord + stack.pop();
}

console.log("reverse order:", reverseWord);

if(word === reverseWord){
  console.log(`${reverseWord} is a palindrom`);
}else{
  console.log(`${reverseWord} is not a palindrom`);
}