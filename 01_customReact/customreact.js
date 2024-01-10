// Given below is a react element.
// This is how the react sees the element returned by the other components.
// example: function App() 
//              { 
                // return <a target="_blank" href="https://www.google.com">Click me to go to google</a>
            //  }
const reactElement = {  
    type: 'a',   // type of the element
    props: {    // properties of the element
        target: '_blank',
        href : 'https://www.google.com'
    },
    children : "Click me to go to google"   // children of the element
}


const mainContainer = document.getElementById("root");  // get the root element from the html page

function customRender(reactElement, container) {        // function to render the react element
    const domElement = document.createElement(reactElement.type);   // create a dom element
    domElement.innerHTML = reactElement.children;   // set the innerHTML of the dom element to the children of the react element
    if (reactElement.props) {   // if the react element has props
        for (const prop in reactElement.props) {        // loop through the props
            if (prop === 'children') {      // if the prop is children, skip it
                continue;
            }
            domElement.setAttribute(prop, reactElement.props[prop]);        // set the attribute of the dom element to the prop
        }
        container.appendChild(domElement);      // append the dom element to the container
    }
}



customRender(reactElement, mainContainer)       // call the customRender function to render the react element