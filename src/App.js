import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"india",
    street:"",
    city:"",
    pincode:"",
    state:"",
    comments:"flase",
    candidates:"false",
    offers:"false",
    push:"",
  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [name]: type==='checked'? checked:value,
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="bg-white flex justify-center items-center">

      <form className="bg-blue-50 flex flex-col font-medium w-[900px]" onSubmit={submitHandler}>
       <label htmlFor="firstName">First Name</label>
       <input type='text' placeholder="First Name" onChange={changeHandler} name="firstName" id="firstName" value={FormData.firstName} className="outline"></input>
       <br></br>
       <label htmlFor="lastName">Last Name</label>
       <input type='text' placeholder="Last Name" name="lastName" onChange={changeHandler} id="lastName" value={FormData.lastName} className="outline"></input>
       <br></br>
       <label htmlFor="email">Email</label>
       <input type='text' placeholder="Email" name="email" onChange={changeHandler} id="email" value={FormData.email} className="outline"></input>
       <br></br>
       <label>Country</label>
       <select id="country" name="country" value={formData.country} onChange={changeHandler} className="outline">
            <option id="india">India</option>
            <option id="US" >US</option>
            <option id="Canada">Canada</option>
            <option id="Mexico">Mexico</option>
       </select>
       <br></br>
       <label htmlFor="street">Street Address</label>
       <input type='text' placeholder="Address" onChange={changeHandler} name="street" id="street" value={FormData.street} className="outline"></input>
       <br></br>

       <label htmlFor="city">City</label>
       <input type='text' placeholder="City" onChange={changeHandler} name="city" id="city" value={FormData.city} className="outline"></input>
       <br></br>

       

       <label htmlFor="state">State</label>
       <input type='text' placeholder="State" onChange={changeHandler} name="state" id="state" value={FormData.state} className="outline"></input>
       <br></br>

       <label htmlFor="pincode">Pin Code</label>
       <input type='text' placeholder="Pin Code" onChange={changeHandler} name="pincode" id="pincode" value={FormData.pincode} className="outline"></input>
       <br></br>

       <fieldset>
        <legend>By Email</legend>
        <div className="">
        <input type="checkbox" name="comments" id="comments" checked={formData.checked} onChange={changeHandler} ></input>
        <label htmlFor="comments">Comments</label>
        <p>Get Notified When Someone Posts a comment on a posting</p>
        </div>

        <div>
        <input type="checkbox" name="candidates" id="candidates" checked={formData.checked} onChange={changeHandler} ></input>
        <label htmlFor="candidates">Candidates</label>
        <p>Get Notified when a candidates posts a job</p>
        </div>

        <div>
        <input type="checkbox" name="offers" id="offers" checked={formData.checked} onChange={changeHandler} ></input>
        <label htmlFor="offers">Offers</label>
        <p>Get Notifed on Offers</p>
        </div>
      
       </fieldset>


      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered vias SMS to your mobile Phone</p>
        <input type="radio" name="push" id="everything" value="everything"checked={formData.push==="everything"} onChange={changeHandler}></input>
        <label  htmlFor="everything">Everything</label>
        <br></br>
        <input type="radio" name="push" id="pemail" value="pemail"checked={formData.push==="pemail"} onChange={changeHandler}></input>
        <label  htmlFor="pemail">Same as email</label>
        <br></br>
        <input type="radio" name="push" id="nopush" value="nopush" checked={formData.push==="nopush"} onChange={changeHandler}></input>
        <label  htmlFor="nopush">No Push</label>
        <br></br>
      </fieldset>
       

       <button className="bg-blue-400 text-white rounded-md">Save</button>
      </form>

    </div>
    );
}

export default App;
