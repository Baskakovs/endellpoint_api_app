import Nav from './Nav'
import LocationCard from './LocationCard'
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
function MapsAdmin(){
    const [locations, setLocation] = useState([])
    useEffect(() => {
        fetch("/locations", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setLocation(data)
                })
            }
        })
    }, [])
    console.log(locations)
    return (
        <>
            <Nav />
            <h1 className="title">Here is a list of all your locations</h1>
        <div className="admin-container">
            {
                Array.isArray(locations) && locations.map((location) => {
                    return (
                        !location ? null :
                        <LocationCard key={location.id} location={location} />
                    )
                })
            }
            <div className="admin-news-container">
                <div className="admin-news-btn">
                    <NavLink to="/admin/create_location">
                    <button className="btn-purple m-a">
                        Add a new location!
                    </button>
                    </NavLink>
                </div>
            </div>
        </div>
        </>
    )
}
export default MapsAdmin