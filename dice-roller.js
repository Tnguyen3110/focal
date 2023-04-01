

const args = process.argv[2];

const rollDice = args => {
  let result = "";
  for (let i = 0; i < args; i++) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    result += `${diceNumber} `;
  }
  return result;
};

console.log(`Rolled ${args} dice: ${rollDice(args)}`); 




