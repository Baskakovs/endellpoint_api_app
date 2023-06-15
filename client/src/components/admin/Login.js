//Importing dependencies
import React, {useState, useEffect} from 'react'
//Importing components
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import logo from '../../images/Logo.png'

function Login(){

    const [errors, setErrors] = useState([])//errors from the front-end and the back-end from the login and signup forms
    const [login, setLogin] = useState(true)
    console.log(errors, "erorrs")

    useEffect(()=>{setErrors()},[login])

    return(
        <div className="container two-col height-100 align-content-center">
            <div className="m-a">
                <img src={logo} alt={"McDuck"}/>
            </div>
            <div className="m-a">
                {login? <LoginForm setErrors={setErrors}/> : 
                <SignupForm 
                setErrors={setErrors}/>}
                <div className="cntr">
                    <button onClick={()=>setLogin(!login)} className="login-btn">{login ? "Signup" : 
                    "Login"}
                    </button>
                    {
                        Array.isArray(errors) && errors.length > 0 ?
                        <div className='login-error-box'>
                            <ul className='errors-list'>{Array.isArray(errors) ? errors.map((error)=>{
                                return <li className='errors-list-item'>{error}</li>
                                }): null}
                            </ul> 
                         </div>
                         :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
export default Login