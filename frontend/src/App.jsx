import './App.css'

function App() {
  const handleForm=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name,email};
    console.log(user);
    
  }
  return (
    <>
      <h1>CRUD Operation</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <button style={{background:"red",marginTop:"10px"}}>submit</button>
      </form>
    </>
  )
}

export default App
