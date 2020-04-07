const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {  
    rl.question("What do you listen to while doing that?", (listens) => {  
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (favMeal) => {  
        rl.question("What's your favourite thing to eat for that meal?", (favFood) => {  
          rl.question("Which sport is your absolute favourite?", (favSport) => {  
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {  

    console.log(`${name} loves listening to ${listens} while ${activity}, munching on ${favFood} for ${favMeal}. Loves playing ${favSport} and wishes they could ${superpower}`);

  rl.close();
            })
          })
        })
      })
    })
  })
});