import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Link to={`/`}><span className='login-btn'>Click here for automatic Login</span></Link>
  )
}
