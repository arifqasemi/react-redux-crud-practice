import React from "react";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { crudAction } from "../store/store";

function Home(){
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    const deleteUser =(id)=>{
        dispatch(crudAction.delete({id}))
        // console.log("delete user", id)


    }
    const usersList =users.map(user =>  <tr key={user.id}>
        <th scope="row" >{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><Link className="btn btn-primary btn-sm" to={`/update/${user.id}`}>Edit</Link> <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button></td>
      </tr>);

    return(
        <div className="container mt-5 border">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
          {usersList.length ===0 ? "no data found" :usersList}
        </thead>
        <tbody>
         
        
        </tbody>
      </table>
      </div>
    )
}

export default Home;