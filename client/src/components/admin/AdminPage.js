import { BrowserRouter as Switch, Route,  } from "react-router-dom";
import './Admin.css'
import { useContext } from "react";
import { AdminContext } from "App";
import Nav from './Nav'

import './Admin.css'
function AdminPage(){
    const { currentAdmin } = useContext(AdminContext)
    return(
        <>
            <Nav />
            <div className="admin-container ">
                <h1 className="admin-title">
                {
                    !currentAdmin ? null :
                `Welcome Back ${currentAdmin.name}!`
                }
                </h1>
            </div>x
        </>
    )
}
export default AdminPage
