import React from 'react';
import CV from '../assets/CV.pdf';


const presentation = () => {
    return (
        <section id='Presentation'>
            <div className='Block-txt-presentation'>
                <h2>Présentation</h2>
                <div className='Txt-presentation'>
                    <p>Développeur passionné par le monde de l'informatique, j'ai suivie plusieurs formations dans le domaine du développement web.</p>
                    <p>Je conçois et réalise des sites web, du cahier des charges à la mise en ligne.</p>
                    <p>Vous pouvez retrouver certaines de mes réalisations <a href="#Realisation"> ICI </a></p>
                    <p>Vous pouvez aussi retrouver mon CV au format PDF <a href={CV} target="_blank" rel="noopener noreferrer">ICI</a></p>
                </div>
                
            </div>
        </section>
    );
};

export default presentation;