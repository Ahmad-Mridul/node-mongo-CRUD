import { useLoaderData } from "react-router";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    const handleDelete = (_id) =>{
        fetch(`http://localhost:3000/users/${_id}`,{
            method:"DELETE"
        })
        .then(response=>response.json())
        .them(data =>{
            console.log(data);
            
        })
    }
    return (
        <div>
            {
                users.map((user) =><p key={user._id}>{user.name}:{user.email} <button onClick={()=>handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;