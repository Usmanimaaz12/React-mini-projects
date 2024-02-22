import React from "react";
const UserContext = React.createContext();
export default UserContext;


// Three steps in context api :
// 1. Create the context
// const MyContext = React.createContext()


// 2. Provide a context value
// <MyContext.Provider value={contextValue}> {children} </MyContext.Provider>


// 3. Consume the context value
// <MyContext.Consumer> {value => /* render something based on the context value */} </MyContext.Consumer>
//       or
// useContext(MyContext) // hook