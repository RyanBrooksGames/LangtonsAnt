# Langtons Ant

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a grid of black and white cells. The rules are as follows:

Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant".The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:

  At a white square, turn 90° clockwise, flip the color of the square, move forward one unit.
  At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit.
  
Normally Langton's Ant would generate a very distinct pattern; however, I decided to have the ant loop across the screen to avoid having to make a huge canvas which would cause the browser to start chugging.
