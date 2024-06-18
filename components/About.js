import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <section
            id="about"
            className="relative py-16 bg-gray-800 text-white h-screen bg-cover bg-center bg-no-repeat"
            
        >
            {/* Dégradé gris sur le fond */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-75"></div>

            {/* Contenu principal */}
            <div className="container mx-auto text-center relative z-10">
                {/* Bande rouge pour "About Us" */}
                <div className="bg-gradient-to-r from-red-500 to-red-700 w-full py-4 shadow-lg mb-8">
                    <h2 className="text-4xl font-bold text-white">
                        <FormattedMessage id="about.section.title" defaultMessage="About Us" />
                    </h2>
                </div>

                {/* Contenu textuel */}
                <p className="text-lg mt-4 transition-opacity duration-1000 ease-in-out opacity-100">
                    <FormattedMessage id="about.section.text1" />
                </p>
                <p className="text-lg mt-2 transition-opacity duration-1000 ease-in-out opacity-100 delay-200">
                    <FormattedMessage id="about.section.text2" />
                </p>
                <p className="text-lg mt-2 transition-opacity duration-1000 ease-in-out opacity-100 delay-400">
                    <FormattedMessage id="about.section.text3" />
                </p>
            </div>
        </section>
    );
}

export default About;
