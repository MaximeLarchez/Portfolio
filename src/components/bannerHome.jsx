import React from 'react';
import PhotoProfil from '../assets/PhotoProfil.jpg';

const BannerHome = () => {
  return (
    <section id='BannerHome'>
      <div className='Container1'>
        <div className='Container-Texte'>
          <ul className='TexteBannerHome'>
            <li>Bonjour,</li>
            <li className='ScriptName'>Je suis Maxime Larchez</li>
            <h1 className='ScriptJob'>Développeur web front-end</h1>
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
