import React, { useEffect, useState } from "react";
import CV from '../assets/CV.pdf';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const presentationSection = document.getElementById("Presentation");
            const headerHeight = document.querySelector('.Header-Container').offsetHeight;
            const scrollPosition = window.pageYOffset;

            if (scrollPosition >= presentationSection.offsetTop - headerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`Header-Container ${isSticky ? 'sticky-header' : ''}`}>
            <div className="Header-Container">
                <div className='viewport'>
                    <div className='cyclon'></div>
                </div>
                <ul>
                    <li>
                        <a href="#BannerHome">Accueil</a>
                    </li>
                    <li>
                        <a href="#Presentation">Présentation</a>
                    </li>
                    <li>
                        <a href="#Realisation">Réalisations</a>
                    </li>
                    <li>
                        <a href="#Competences">Compétences</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href={CV}>Mon CV</a>
                    </li>
                </ul>
                <div className='viewport'>
                    <div className='cyclon'></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
