import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { crudAction } from "../store/store";


function Update(){
    const [nameinput, setNameinput]= useState('');
    const [emailinput, setEmailinput]= useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const users = useSelector(state => state.user.users);
    const user = users.filter((user) => user.id == id);
    const { name, email }= user.length > 0 ? user[0] :{};
    useState(()=>{
        setNameinput(name);
        setEmailinput(email);
    },[name,email])
    function handleSubmit(e){
        e.preventDefault();
        if(nameinput === '' || emailinput === ''){
            alert('Please fill all the fields');
        }else{
            dispatch(crudAction.update({
                id:id,
                name: nameinput ,
                email :  emailinput
            }))
         navigate('/home');
        }
        
    }
    return(
        <div className='container mt-5 border p-2'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" onChange={e => setNameinput(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={nameinput}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input type="email" className="form-control" onChange={e => setEmailinput(e.target.value)} id="exampleInputPassword1" placeholder="Email" value={emailinput}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
        )
}

export default Update;