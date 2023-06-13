import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons/faCopyright';

const footer = () => {
    return (
        <section id='Footer'>
            <div className='LogoFooter'>
               <a href="mailto:maxime.larchez@orange.fr"><FontAwesomeIcon icon={faEnvelope} /></a>
               <a href="https://github.com/MaximeLarchez"><FontAwesomeIcon icon={faGithub} /></a>
               <a href="https://www.linkedin.com/in/maxime-larchez/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p><FontAwesomeIcon icon={faCopyright} className="fal" />Maxime Larchez, Tous droits réservés.</p>
        </section>
    );
};

export default footer;