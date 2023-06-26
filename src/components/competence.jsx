import React, { useState, useEffect, useRef } from 'react';
import ImgCompetence from '../assets/imgCompetences.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

const Competence = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="Competences" ref={sectionRef}>
            <div className="bloc-img">
                <figure className="ContainerImg">
                    <img src={ImgCompetence} alt="graphique" />
                </figure>
            </div>

            <div className="Bloc-Graphique">
                <h2>Compétences</h2>
                <ul>
                    <li className={`HTML ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faHtml5} className="logohtml" />
                            HTML
                        </p>
                        <p>90%</p>
                    </li>
                    <li className={`CSS ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faCss3} className="logoCSS" />
                            CSS
                        </p>
                        <p>85%</p>
                    </li>
                    <li className={`SASS ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faSass} className="logoSass" />
                            SASS
                        </p>
                        <p>80%</p>
                    </li>
                    <li className={`JavaScript ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faSquareJs} className="logoJS" />
                            JavaScript
                        </p>
                        <p>55%</p>
                    </li>
                    <li className={`React ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faReact} className="logoReact" />
                            React.js
                        </p>
                        <p>65%</p>
                    </li>
                    <li className={`Apprentissage ${isVisible ? 'visible' : ''}`}>
                        <p>
                            <FontAwesomeIcon icon={faWordpress} className="logoWordpress" />
                            En cours d'Apprentissage
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Competence;
