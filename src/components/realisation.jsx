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
                <a href="https://maximelarchez.github.io/P2_Booki/">
                    <figure className='Container-Img'>
                        <img src={Booki} alt="Maquette site internet Booki" />
                    </figure>
                </a>
                <a href="https://maximelarchez.github.io/P3_Oh_my_food/">
                    <figure className='Container-Img'>
                        <img src={Ohmyfood} alt="Maquette site internet Ohmyfood" />
                    </figure>
                </a>
                <a href="https://maximelarchez.github.io/P4_optimisez_un_site_web_existant/">
                    <figure className='Container-Img'>
                        <img src={Panthere} alt="Maquette site internet La Panthere" />
                    </figure>
                </a>
                <a href="Kanap">
                    <figure className='Container-Img'>
                        <img src={Kanap} alt="Maquette site internet Kanap" />
                    </figure>
                </a>
                <a href="Piquante">
                    <figure className='Container-Img'>
                        <img src={Piquante} alt="Maquette site internet Piquante" />
                    </figure>
                </a>
                <a href="Kasa">
                    <figure className='Container-Img'>
                        <img src={Kasa} alt="Maquette site internet Kasa" />
                    </figure>
                </a>
            </div>

        </section>
    );
};

export default realisation;