import React, { useEffect, useState } from 'react';
import PhotoProfil from '../assets/PhotoProfil.jpg';

const BannerHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showElements = () => {
      const liElements = document.querySelectorAll('.TexteBannerHome li');
      const delay = 1500; // Nouvelle valeur de délai (1.5 secondes)
      liElements.forEach((li, index) => {
        setTimeout(() => {
          li.classList.add('Visible');
        }, (index + 1) * delay);
      });
    };
    
    setIsVisible(true);
    showElements();
  }, []);

  return (
    <section id='Accueil'>
      <div className='Container1'>
        <div className='Container-Texte'>
          <ul className={`TexteBannerHome ${isVisible ? 'Visible' : ''}`}>
            <li>Bonjour,</li>
            <li className='ScriptName'>Je suis Maxime Larchez</li>
            <li>
              <h1 className='ScriptJob'>Développeur web front-end</h1>
            </li>
            <li>Création moderne et responsive pour web</li>
          </ul>
        </div>
      </div>
      <figure className='Photo-Profil'>
        <img src={PhotoProfil} alt='Profil' />
      </figure>
    </section>
  );
};

export default BannerHome;
