import { useEffect, useState } from "react";
import Nav from "./Nav"
import NewsCard from "./NewsCard";

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
        <h1>Here is a list of all your news</h1>
        <div className="admin-news-container">
        {
            Array.isArray(news) && news.map((newss, index) => {
                return (
                    !newss ? null :
                    <NewsCard key={index} newss={newss} />
                )
            })
        }
            <NewsCard/>
            <div class="card">
        </div>
        <div class="card">
        </div>
        </div>
        </>
    )
}
export default NewsAdmin