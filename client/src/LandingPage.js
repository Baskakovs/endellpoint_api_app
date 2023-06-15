import { useState, useEffect } from "react";

import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground";
import Faq from "components/faqs/SingleCol";
import Blog from "components/blogs/PopularAndRecentBlogPosts";
import Footer from "components/footers/FiveColumnDark"

function LandingPage(){

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("/news_landing",
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
            }
        })
    }, [])

    console.log(news)
    
    return (
        <>
        <Hero />
        <Features />
        <Faq/>
        {
            news.length > 0 ? 
            <Blog news={news}/>
            :
            null
        }
        <Footer/>
        </>
    );
}

export default LandingPage;