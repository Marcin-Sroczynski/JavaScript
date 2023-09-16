let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age >= 18 && registeredEarly ){
  raceNumber += 1000;
}
//console.log(raceNumber);

if (age > 18 && registeredEarly){
  console.log(`You will start at 9:30 am with race number ${raceNumber}`)
} else if (age > 18 && registeredEarly === false){
  console.log(`You will race at 11:00am with number ${raceNumber}`);
} else if (age < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
} else {
  console.log(' You should go and check registration desk');
}

