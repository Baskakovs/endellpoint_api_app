import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground";
import Faq from "components/faqs/SingleCol";
import Blog from "components/blogs/PopularAndRecentBlogPosts";
import Footer from "components/footers/MiniCenteredFooter"
function LandingPage(){
    return (
        <>
        <Hero />
        <Features />
        <Faq/>
        <Blog/>
        <Footer/>
        </>
    );
}

export default LandingPage;