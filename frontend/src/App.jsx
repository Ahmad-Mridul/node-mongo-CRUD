import './App.css'

function App() {
  const handleForm=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name,email};
    console.log(user);
    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      
    })
  }
  return (
    <>
      <h1>CRUD Operation</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
