import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './validation/formSchema'
import LoginForm from './loginForm'
import './Login.css'
const initialFormValues = {
    username: '',
    password: '',
  }
  const initialFormErrors = {
    username: '',
    password: '',
  }
  const initialDisabled = true
export default function Form() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled) 
    
    
    const attemptLogin = loginDetails => {
        // Login function
        console.log(loginDetails)

        // {username: __, password: __}
        setFormValues(initialFormValues)
    }

    const validate = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: ""
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          });
      }
      const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
          ...formValues,
          [name]: value 
        })
      }
      
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  
   const formSubmit = () => {
        const loginDetails = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
          }
          attemptLogin(loginDetails)
      }
    

  return (
   
    <div>
     <div class = "mainSection">
        <h1>Login to Account</h1>

        <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
    </div>
  )
}