import React from "react";
import Header from "../components/header";
import BannerHome from "../components/bannerHome";
import Presentation from "../components/presentation";
import Realisation from '../components/realisation';
import Competence from "../components/competence";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () =>{
    return(
        <section className="homePage">
            <BannerHome/>
            <Header/>
            <Presentation/>
            <Realisation/>
            <Competence/>
            <Contact/>
            <Footer/>
        </section>
    )
}

export default Home;