function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400) {
    return "This one is on me!";
  }
  else if (someValue >= 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(destinationCity){
  let result
  if (destinationCity === NYC) {
    return 'Ok, sounds good.';
  }
  else if (destinationCity === Pittsburgh) {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipIsGenerous){
  let result;
  switch (tipIsGenerous) {
    case tipIsGenerous:
      return "Thank you so much.";
      break;
    case theTipIsNotAsGenerous:
      return "Thank you.";
      break;
    default:
      console.log("Bye.");
      break;
  }
}