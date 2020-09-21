import React from 'react'
import './Login.css'
export default function loginForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      
        <div className = 'row'>
            <p>Username</p>
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            placeholder="user@mail.com"
            type='text'
          />
        </div>
        
      

      <div className = 'row'>
          <p>Password</p>
          <input
            value={values.password}
            onChange={onChange}
            placeholder="•••"
            name='password'
            type='password'
          />  
            </div>
        
       
       <div className = 'row'>
       <button id = "submit" disabled={disabled}>Login</button>
        </div>
      
        <div className='errors'>
          <p>{errors.username}</p>
          <p>{errors.password}</p>
          </div>
    </form>
    
  )
}
