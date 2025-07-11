// Bouncing Ball

// How many times will the mother see the ball pass in front of her window 
// (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer,
//  otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball
//  is strictly greater than the window parameter.

// Examples:
// h = 3, bounce = 0.66, window = 1.5, result is 3
// h = 3, bounce = 1, window = 1.5, result is -1 
// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  // your code here
  let ballPasses = -1;
  
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    ballPasses = 1;
    
    while (window < h) {
      h = h * bounce;
      if (window < h) {
        ballPasses = ballPasses + 2;
      }
    }
  } 
  return ballPasses;
}

