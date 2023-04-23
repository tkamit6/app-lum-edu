import axios from 'axios';
import React, { useState ,  } from 'react'
import financeImg from '../images/sammy-finance.gif'
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [city, setCity] = useState(""); 
  const [msg, setMsg] = useState("");
  const [msgSaved, setmsgSaved] = useState("");
  const history = useNavigate();


  // const header = {'Access-Control-Allow-Origin' : '*'};

  const submitHandler =(e)=>{
    e.preventDefault();
    axios.post("https://643edd976c30feced83574f0.mockapi.io/share-thought/",
    {name: name,
    email: email,
    city: city,
    msg: msg
    })
    .then((res)=>{
      
      Swal.fire(
        'Good job!',
        'You are being redireced to responses!',
        'success'
      )
      setTimeout(() => {
        history("/read");
      }, 4000);
    })
    .then((err)=>{
      console.log(err);
    })
  };

  return (
    <>
      <div className="container py-5">
        <h2 className='text-center'>Message us to Serve You Better</h2>
        <h3>{msgSaved}</h3>
        <div className="row align-items-center gx-5 clearfix ">
        <div className="col-md-4"  >
          <img src={financeImg} alt="Img" />
        </div>
            <div className="col-md-8">
            <form onSubmit={submitHandler}>
                <div className="row">
                      <div className="col">
                        <input type="text" name="full_name" onChange={(e)=>{setName(e.target.value)}} className="form-control mb-3" placeholder="Full name" aria-label="First name" />
                      </div>
                      <div className="col">
                        <input type="text" name="email_id" onChange={(e)=>{setEmail(e.target.value)}} className="form-control mb-3" placeholder="Email Id" aria-label="Last name" />
                      </div>
                </div>
                <div className="row">
                      <div className="col-12 col-lg-12">
                        <input type="text" name="city" onChange={(e)=>{setCity(e.target.value)}} className="form-control mb-3" placeholder="City" aria-label="Last name" />
                      </div>
                </div>
                <div className="row" >
                      <div className="col-12 col-lg-12">
                        <textarea name="message" onChange={(e)=>{setMsg(e.target.value)}} placeholder='Write a message in 500 words' id="" className='form-control mb-3' style={{height:"150px"}} maxLength="500"></textarea>
                      </div>
                </div>
                <div className="row">
                      <div className="col">
                        <input type="submit" value="Send Message" className='btn btn-success mb-3' />
                      </div>
                </div>
              </form>
            </div>
      </div>
      </div>
    </>
  )
}

export default Create