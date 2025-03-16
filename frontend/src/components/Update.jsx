import { useLoaderData } from "react-router";

const Update = () => {
    const loadedCustomers = useLoaderData();
    console.log(loadedCustomers);
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const customer = {name,email}
        console.log(customer);
        fetch(`http://localhost:3000/customers/${loadedCustomers._id}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <p>Update info of: {loadedCustomers.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" placeholder={loadedCustomers.name}/><br />
                <input type="email" name="email" id="" placeholder={loadedCustomers.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;