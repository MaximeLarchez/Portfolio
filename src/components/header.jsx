import React, { useEffect, useState } from "react";
import CV from '../assets/CV.pdf';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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

    useEffect(() => {
        const handleSetActiveSection = () => {
            const sections = ['Accueil','BannerHome', 'Presentation', 'Realisation', 'Competences', 'Contact'];
            
            const windowHeight = window.innerHeight;

            const activeSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
                }
                return false;
            });

            setActiveSection(activeSection);
        };

        window.addEventListener("scroll", handleSetActiveSection);

        return () => {
            window.removeEventListener("scroll", handleSetActiveSection);
        };
    }, []);

    return (
        <header className={`Header-Container ${isSticky ? 'sticky-header' : ''}`}>
            <div className="Header-Container">
                <div className='viewport'>
                    <div className='cyclon'></div>
                </div>
                <ul>
                    <li className={activeSection === 'Accueil' ? "nav-active" : ""}>
                        <a href="#Accueil">Accueil</a>
                    </li>
                    <li className={activeSection === 'Presentation' ? "nav-active" : ""}>
                        <a href="#Presentation">Présentation</a>
                    </li>
                    <li className={activeSection === 'Realisation' ? "nav-active" : ""}>
                        <a href="#Realisation">Réalisations</a>
                    </li>
                    <li className={activeSection === 'Competences' ? "nav-active" : ""}>
                        <a href="#Competences">Compétences</a>
                    </li>
                    <li className={activeSection === 'Contact' ? "nav-active" : ""}>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href={CV} target="_blank" rel="noopener noreferrer">Mon CV</a>
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


