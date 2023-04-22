import { useEffect, useState } from "react";
import Nav from "./Nav"
import NewsCard from "./NewsCard";
import { NavLink } from "react-router-dom";

function NewsAdmin(){


  //FETCHING NEWS DATA
  //==================

  const [news, setNews] = useState([])
  useEffect(() => {
    fetch("/news",
    {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
    })
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                setNews(data)
            })
        }else{
            console.log("error")
        }
    })
}, [])


    return(
        <>
        <Nav />
        <h1 className="title">Here is a list of all your news</h1>
        <div className="admin-container">
            {
                Array.isArray(news) && news.map((newss, index) => {
                    return (
                        !newss ? null :
                        <NewsCard key={index} newss={newss} />
                    )
                })
            }
            <div className="admin-news-container">
                <div className="admin-news-btn">
                    <NavLink to="/admin/create_news">
                    <button className="btn-purple m-a">
                        Create News
                    </button>
                    </NavLink>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewsAdmin