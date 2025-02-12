import './App.css'

function App() {
  // handling events:
  function handleClick(){
    alert("Button was Clicked!");
  }
 const handleChange=(e)=>{
  console.log(e.target.value);
 }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p style={{backgroundColor:"blue"}} onMouseOver={()=>{alert("Para pe mouse gaya")}}>I am a Paragraph</p>
      <input type='text'onChange={handleChange}></input>
    </>
  )
}

export default App
