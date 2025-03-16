import { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Users = () => {
    const loadedCustomers = useLoaderData();
    const [customers,setCustomers] = useState(loadedCustomers);
    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:3000/customers/${_id}`,{
            method:"DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                const remaining = customers.filter(customer => customer._id!=_id);
                setCustomers(remaining);
            }
        });
    }
    
    return (
        <div>
            {
                customers.map((customer) =><p key={customer._id}>{customer.name}:{customer.email}:{customer._id} 
                <Link to={`/customers/${customer._id}`}><button>update</button></Link>
                <button onClick={()=>handleDelete(customer._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;