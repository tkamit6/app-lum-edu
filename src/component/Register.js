// import axios from 'axios';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import RegImg from '../images/sammy-delivery.gif'

const Register = () => {

    const ageRange = [18,19,20,21,22,23,24,25,26,27,28,29,30];
    const [msg, setmsg] = useState();
    // const navigate = useNavigate()
    const [state, setstate] = useState(
        {
            first_name:"",
            last_name:"",
            mobile:"",
            email:"",
            sex:"",
            age:"",
            password:""
        }
    );


    const handler =(e)=>{
        console.log(e.target.name+ " " + e.target.value)
        const {name,value}=e.target;
        setstate({...state,[name]:value})
    }
    const saveData =(e)=>{
        e.preventDefault()
        console.log(state)
        // axios.post(" http://localhost:9000/reg/",state)
        // .then((res)=>{
        //     console.log(res)
        //     setmsg("Saved")
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Registered successfully!',
        //         showConfirmButton: false,
        //         timer: 2500
        //       })
        //       setTimeout(() => {
        //         navigate("/list")  
        //       }, 3000);
              
        // })
        // .then((err)=>{
        //     console.log(err)
        // })
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="com-md-12">
                    <div className="head">
                     &nbsp;
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="img-box">
                    <img src={RegImg} className='img-fluid' alt="01" />
                </div>
                </div>
                <div className="col-md-6">
                {!msg?"":<div className='alert alert-success' style={{textAlign:"center"}}>{msg}</div>}
                    <form onSubmit={saveData}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="first_Name">First Name</label>
                                <input type="text" placeholder='Last Name' onChange={handler} name='first_name' className='form-control' />
                            </div>    
                            <div className="col">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" placeholder='Last Name' onChange={handler} name='last_name' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text" placeholder='Mobile' onChange={handler} name='mobile' className='form-control' />
                            </div>    
                            <div className="col">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='Email' onChange={handler} name='email' className='form-control' />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col mb-3">
                                <label htmlFor="sex">Sex</label>
                                <div className="form-control">
                                <input type="radio"  name='sex' value="Male" onChange={handler} className='form-' />Male
                                <input type="radio"  name='sex' value="Female" onChange={handler} className='form-' />Female
                                </div>
                            </div>    
                            <div className="col">
                            <label htmlFor="First Name">Age</label>
                                <select name="age" className='form-control' onChange={handler} style={{textAlign:"center"}} id="">
                                    <option value="" >---Age---</option>
                                    {
                                        ageRange.map((data,index)=>
                                        <option value={data} key={index}>{data}</option>)
                                    }
                                </select>
                            </div>
                                <div className="col mb-3" >
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className='form-control' onChange={handler} placeholder='Password' name='password' />
                                </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="submit" value="Submit" className='btn btn-success' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register