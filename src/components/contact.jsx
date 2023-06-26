import React from 'react';

const Contact = () => {



    return (
        <section id='Contact'>
            <h2>Démarrons un projet ensemble, n'hésitez pas à me contacter ci-dessous:</h2>
            <form action="get">
                <label htmlFor="FormContact"></label>
                <input type="text" name="Name" id="Nameinput" placeholder="Nom" />
                <input type="text" name="mail" id="Mailinput" placeholder="Adresse e-mail" />
                <textarea name="Message" id="MessageArea" cols="50" rows="10" placeholder='Votre Message'></textarea>
                <button>ME CONTACTER</button>
            </form>

        </section>
    );
};

export default Contact;
