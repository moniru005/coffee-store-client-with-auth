import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = id =>{
    //make sure user is confirm to delete
    fetch(`https://coffee-store-server-9witg7lfw-md-monir-uddins-projects.vercel.app/users/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //Remove the user from the UI
        const remainingUser = users.filter(user => user._id !== id);
        setUsers(remainingUser);
    })
  }

  return (
    <div>
      <h2 className="text-lg mb-6">Users: 
      <span className="font-semibold pl-3">
        {users.length}
      </span> </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
           {
            users?.map(user =>  <tr key={user._id} 
            className="bg-base-200">
            <th></th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button
                onClick={() => handleUserDelete(user._id)} 
                className="btn btn-sm bg-slate-800 text-white">X</button>
            </td>
          </tr>
       )
           }
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
