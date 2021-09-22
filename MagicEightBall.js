// Declaring a constant username variable
const userName = '';

// Creating a ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`):
// Saying Hello when the user enters no name
console.log('Hello');

// user question posed to the magic ball
const userQuestion = 'Will I become a werewolf tonight?';
// confirming the question by the magic ball
console.log( `You asked a question that: ${userQuestion}`);

// Generating answers randomly by the magic ball
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Declaring if else statement to answer the question asked by the user
if(randomNumber === 0) {
  eightBall = 'My sources say no';
}
else if(randomNumber === 1){
  eigthBall = 'Do not count on it';
}
else if (randomNumber === 2 ) {
  eightBall = 'Outlook not so good';
}
else if (randomNumber === 3){
  eightBall = 'cannot predict now';
}
else if (randomNumber === 4){
  eightBall = 'Signs Points to yes';
}
else if(randomNumber === 5){
  eightBall = 'It is Certain';
}
else if (randomNumber === 6){
  eightBall = 'It is decidedly so';
}
else{
  eightBall = 'Reply hazy try again';
}
console.log(`The eight ball answered: ${eightBall}`);