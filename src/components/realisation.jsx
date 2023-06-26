import React from 'react';
import Booki from '../assets/Realisations/Booki.png';
import Ohmyfood from '../assets/Realisations/Ohmyfood.png';
import Panthere from '../assets/Realisations/LaPanthere.png';
import Kanap from '../assets/Realisations/Kanap.png';
import Piquante from '../assets/Realisations/Piquante.png';
import Kasa from '../assets/Realisations/Kasa.png';

const realisation = () => {
  return (
    <section id='Realisation'>
      <h2>Mes Réalisations</h2>
      <div className='Card'>
        <a href="https://maximelarchez.github.io/P2_Booki/" className="flip-card">
          <figure className='Container-Img'>
            <img src={Booki} alt="Maquette site internet Booki" />
            <a href="https://maximelarchez.github.io/P2_Booki/" className="flip-content booki">
              <ul>
                <li>Transformer une maquette en site web</li>
                <li>Création d'un site en HTML et CSS</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
        <a href="https://maximelarchez.github.io/P3_Oh_my_food/" className="flip-card">
          <figure className='Container-Img'>
            <img src={Ohmyfood} alt="Maquette site internet Ohmyfood" />
            <a href="https://maximelarchez.github.io/P3_Oh_my_food/" className="flip-content ohmyfood">
              <ul>
                <li>Dynamisez une page web avec des animations CSS</li>
                <li>Utilisation de Sass</li>
                <li>Utilisation de GitHub</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
        <a href="https://maximelarchez.github.io/P4_optimisez_un_site_web_existant/" className="flip-card">
          <figure className='Container-Img'>
            <img src={Panthere} alt="Maquette site internet La Panthere" />
            <a href="https://maximelarchez.github.io/P4_optimisez_un_site_web_existant/" className="flip-content panthere">
              <ul>
                <li>Optimisez un site web existant</li>
                <li>Référencement naturel (SEO)</li>
                <li>Amélioration de l'accessibilité</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
        <a href="https://github.com/votre-compte" className="flip-card">
          <figure className='Container-Img'>
            <img src={Kanap} alt="Maquette site internet Kanap" />
            <a href="https://github.com/votre-compte" className="flip-content kanap">
              <ul>
                <li>Construction d'un site e-commerce en JavaScript</li>
                <li>Déboguez l'interface de votre site internet</li>
                <li>Récupération des produits grâce à une API</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
        <a href="https://github.com/votre-compte" className="flip-card">
          <figure className='Container-Img'>
            <img src={Piquante} alt="Maquette site internet Piquante" />
            <a href="https://github.com/votre-compte" className="flip-content piquante">
              <ul>
                <li>Construction d'une API sécurisée</li>
                <li>Utilisation de Node.js</li>
                <li>Utilisation de MongoDB</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
        <a href="https://maximelarchez.github.io/P7_Creez_une_application_web_avec_React/" className="flip-card">
          <figure className='Container-Img'>
            <img src={Kasa} alt="Maquette site internet Kasa" />
            <a href="https://maximelarchez.github.io/P7_Creez_une_application_web_avec_React/" className="flip-content kasa">
              <ul>
                <li>Création d'une application web</li>
                <li>Utilisation de React</li>
                <li>Créations des routes avec Create React App</li>
                <li>Responsive desktop, tablet et mobile</li>
              </ul>
            </a>
          </figure>
        </a>
      </div>
    </section>
  );
};

export default realisation;
