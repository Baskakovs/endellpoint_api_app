import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { AdminContext } from 'App'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../App'
function Nav({handleLogout}){
    const {currentUser, logoutCurrentUser} = useContext(AdminContext)

    const navigate = useNavigate()
    function handleLogout(e){
        e.preventDefault()
        fetch('/logout', {
            method: "DELETE"
        })
        .then(res => {
            if(res.status == 204){
                logoutCurrentUser()
                navigate('/login')
            }else{
                alert("Something went wrong")
            }
        })
    }
    return (
        <>
            {!true ? 
                <ul className="ul-nav">
                    <NavLink to="/login">
                        <li className="nav-li">
                            <button className={"btn-purple"}>
                                Login
                            </button>
                        </li>
                    </NavLink>
                </ul>
                :
                <ul className="ul-nav">
                    <li className="nav-li" key={1}>
                        <button className={"btn-purple"} onClick={handleLogout}>Logout</button>
                    </li>
                    <NavLink to="/my_books">
                        <li className="nav-li" key={2}>
                            <button className={"btn-nav"}>Google Maps</button>
                        </li>
                    </NavLink>
                    <NavLink to="/admin/news">
                        <li className="nav-li" key={3}>
                            <button className={"btn-nav"}>News</button>
                        </li>
                    </NavLink>
                </ul>
            }
        </>
    )    
}
export default Nav