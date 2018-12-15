let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break; 
  default:
    console.log('No medal awarded.');
    break;
}



/* The "switch" keyword allows you to write an alternative syntax to else if statements that is best used when multiple conditions are present. On lines 3-6 the first switch statement reads as follows: "switch" will compare each case (or condition) to the "athleteFinalPosition" variable; then case keyword checks if "athleteFinalPosition" has a value of 'first place'; if the value of "athleteFinalPosition" is "first place" the console will log "You get the gold medal"; the break at the end of the first case tells the computer to not run any of the followng code on lines 7-15. Without the "break" key word at the end of each case, the program would execute the code for all matching cases and the default code as well. In this case, all of the strings on lines 5, 8, 11, & 14 would print to the console. If there was no true statement found, then the default string would print to the console. */