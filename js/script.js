var eventType;
var eventClothing;
var tempFahr;
var tempClothing;
var result;

eventType = prompt("Choose event type: Casual, Semi-formal, formal.");
tempFahr = prompt("What is the current temperature?");

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


if (tempFahr < 54) {
  tempClothing = "a coat";
} else if ( tempFahr > 54 && tempFahr < 70) {
    tempClothing = "a jacket";
} else {
    tempClothing = "no jacket";

}

result = "Since it's " + tempFahr + " degrees and you are going to a " + eventType
  + " event, you should wear " + eventClothing + " and " + tempClothing + ".";

document.write(result);
