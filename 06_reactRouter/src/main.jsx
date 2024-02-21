import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import { Route } from 'react-router-dom'

import User from './components/User/User.jsx'

// Two methods to make the router
// 1. Using createBrowserRouter  : array of objects with path and element
// 2. Using createRoutesFromElements : JSX elements
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact",
//           element: <Contact/>
//         },
//         {
//           path: "github",
//           element: <Github/>
//         }
//       ]
//     }
//   ]
// )

// Another way to create a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />  {/* we will get the access of userid in <User/> component*/}
      <Route 
      loader={githubInfoLoader} // gives optimized way to fetch data before rendering the component
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Instead of writing here <App/> , as we are using React router we have to write the below element. 
    It takes a prop as router */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
