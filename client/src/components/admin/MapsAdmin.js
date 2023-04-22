import Nav from './Nav'
import NewsCard from './NewsCard'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
function MapsAdmin(){
    const [locations, setLocation] = useState([])
    return (
        <>
            <Nav />
            <h1 className="title">Here is a list of all your locations</h1>
        <div className="admin-container">
            {
                Array.isArray(locations) && locations.map((location, index) => {
                    return (
                        !location ? null :
                        <NewsCard key={index} location={location} />
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