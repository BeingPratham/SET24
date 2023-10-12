import './signup.css';
import React from 'react'

export default function Signup(props) {
    const onSubmit = ((e)=>{
        e.preventDefault();
        console.log("Signup");
    })
  return (
    <div className="signup-form">
        <h2>{props.title}</h2>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Second Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">{props.submitButtonText}</button>
        </form>
      </div>
  )
}
