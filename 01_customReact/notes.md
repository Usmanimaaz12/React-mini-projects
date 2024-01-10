#### Why React ? 
- hype , job market, trend, makes easy to manage and build complex frontend (if simple -> overkill)
#### Why was React created ?
-  Because of phantom/ghost message in facebook.
- No consistency in UI (State -> JS  & UI -> DOM) 

###### KEY POINTS
- Try to use .jsx extension when the function returns HTML otherwise we are free to use .js extension.

- Behind The Scene : <MyApp /> == MyApp(); {parsing is done by some tools like transpilers /Babel}

- using variable : In JS -> (vary) ;  In JSX -> ({vary}) ; In string literal -> (`${vary}`)

- Note : onClick = setColor("red")  -Wrong bcoz onClick expect callback function.
Therefore, correct syntax would be : onClick = { ()=> setColor("red")}
#### Where React plays it role OR Hooks definition?
- Suppose there are multiple places where same value is to updated. In JS we have to write multiple selectors to change values. 
- React's major role is in UI updation. React uses special functions called hooks to update and manage UI
