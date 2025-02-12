import { createContext, useEffect, useState } from "react";
import "./App.css";
// import ChildA from "./components/ChildA";
import ChangeTheme from "./components/ChangeTheme"

// const UserContext= createContext();
const ThemeContext= createContext();
function App() {
  // const [name,setName]= useState("cherry");
  //USE-EFFECT: 
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // // first: side-effect function
  // //second: clean-up function
  // //third: dependencies list
  // // useEffect(() => {
  // //   first
  
  // //   return () => {
  // //     second
  // //   }
  // // }, [third])

  // //variation 1: runs on every render
  // // useEffect(()=>{
  // //   alert("I will run on every render!")

  // // })

  // //variation 2:
  // // useEffect(()=>{
  // //   alert("i will run on first render")
  // // },[]);

  // //variation 3:
  // // useEffect(()=>{
  // //   alert("i will run whenever count is affected")
  // // },[count]);

  // //variation 4: multiple dependencies:
  // // useEffect(()=>{
  // //   alert("i will run whenever count /total is affected")
  // // },[count,total]);

  // //variation 5: clean-up function( idhar count update ho raha toh clean hoke update ho raha)
  // useEffect(() => {
  // alert("count is updated"); //fiorst
  
  //   return () => {
  //     alert("Count is unmounted"); //second
  //   }
  // }, [count])//third



  //USE-CONTEXT:

  //step1: create useContext:
  
  

  const [theme, setTheme]= useState('light');
  return (<>
  {/* UseEffect */}
  {/* <button onClick={()=>{setCount(count+1)}}>Count: {count}</button>
  <button onClick={()=>{setTotal(total+1)}}>Total: {total}</button> */}


  {/* <UserContext.Provider value={name}>
  <ChildA/>
  </UserContext.Provider> */}

  <ThemeContext.Provider>
   <ChangeTheme value={{theme,setTheme}}/>
   <div className="container" style={{backgroundColor:theme==='light'?'white':'black'}}>

   </div>
  </ThemeContext.Provider>


  </>
  );
}

export default App
// export {UserContext}
export {ThemeContext}

