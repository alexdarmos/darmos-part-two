//initialize variables
var eventType;
var eventClothing;
var tempFahr;
var tempClothing;
var result;

//set variables to prompt user
eventType = prompt("Choose event type: Casual, Semi-formal, formal.");
tempFahr = prompt("What is the current temperature?");

//switch statement checks user answer for event type, stores corresponding..
//..clothing type in variable
switch (eventType) {
  case "casual":
    eventClothing = "something comfy";
    break;
  case "semi-formal":
    eventClothing = "a polo";
    break;
  case "formal":
    eventClothing = "a suit";
}

//if statement checks user input for temperature
//stores corresponding clothing in variable
if (tempFahr < 54) {
  tempClothing = "a coat";
} else if (tempFahr < 70) {
    tempClothing = "a jacket";
} else {
    tempClothing = "no jacket";

}

//set variable to string telling user what to wear based on their answers
result = "Since it's " + tempFahr + " degrees and you are going to a " + eventType
  + " event, you should wear " + eventClothing + " and " + tempClothing + ".";

//write result to document
document.write(result);
