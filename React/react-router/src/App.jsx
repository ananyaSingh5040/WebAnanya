import './App.css'
import { Navbar } from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import { Home } from './components/Home'
import Params from './components/Params'
function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: 
      <div>
      <Navbar/>
        <Home/>
        </div>
      
    },{
      path: "/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/student/:id",
      element:
      <Params/>

    },
  ])

 
 

  return (
    <>
    <RouterProvider router={router}>
    <Navbar/>
    </RouterProvider>
    </>
  )
}

export default App
