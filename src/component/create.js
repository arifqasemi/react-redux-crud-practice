import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import React, { useState } from "react";
import { crudAction } from '../store/store';
import { useNavigate } from 'react-router-dom';
function Create(){
    const Navigate = useNavigate();
    const [nameinput, setNameinput]= useState('');
    const [emailinput, setEmailinput]= useState('');
    const users = useSelector(state => state.user.users);
    const id = users.length > 0  ? users[users.length -1].id + 1 : 1;
    let dispatch =useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        if(nameinput === '' || emailinput === ''){
            alert('Please fill all the fields');
        }else{
            dispatch(crudAction.add({
                id:id,
                name: nameinput ,
                email :  emailinput
            }))
         Navigate('/home');
        }
        
    }

    return(
     <div className='container mt-5 border p-2'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" onChange={e => setNameinput(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input type="email" className="form-control" onChange={e => setEmailinput(e.target.value)} id="exampleInputPassword1" placeholder="Email"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    )
}

export default Create;