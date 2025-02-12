import { useState } from 'react'
import './App.css'
import Usercard from './components/userCard'
import { Logout } from './components/Logout';
import { Login } from './components/Login';

function App() {
 const [value, setValue]= useState(true);
  return (
    <>
    {/* Conditional Rendering: ek condition pe based output show karte */}
      {value ? <Logout/>: <Login/>};
      



     {/* <Usercard name="Cherry"/>
    <Usercard name="Anshul"/>
    <Usercard name="Riri"/>
      <Usercard> */}
        {/* Iske bich main joh kuch bhi likha hoga woh iss card ka childer hoga: */}
        {/* hello ji, main ek child hu.
      </Usercard>  */}


      
    </>
  )
}

export default App
