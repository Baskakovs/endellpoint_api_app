//Importing dependencies
import React, {useState, useContext, useEffect} from 'react';
import { AdminContext } from 'App';
import { useNavigate } from 'react-router-dom';
function LoginForm({setErrors}){

    const {handleLogin} = useContext(AdminContext)
    
    //HANDLING FORM INPUTS
    //====================
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const navigate = useNavigate()

    //SUBMITTING THE FORM TO THE BACKEND
    //==================================
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginForm)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    handleLogin(user)
                    navigate('/admin')
                })

            }else{
                res.json().then(e => setErrors([e.error]))
            }
        })
    }

    return(
        <>
        <form className={"form"} onSubmit={handleSubmit}>
            <div className="container">
            <input type="email" onChange={handleChange} name="email" placeholder={"peter@owing.com"} />
            <input type="password" onChange={handleChange} name="password" placeholder={"password"}/>
            <button type="submit" className="btn-purple mt-7">Log In</button>
            </div>
        </form>
        </>
    )
}

export default LoginForm