#### IMPORTANT TAKE AWAY
- The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
- onClick = setColor("red")  -Wrong bcoz onClick expect callback function.
Therefore, correct syntax would be : onClick = { ()=> setColor("red")}

