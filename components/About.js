import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    const [displayedText, setDisplayedText] = useState(''); // État pour gérer le texte affiché
    const [showCursor, setShowCursor] = useState(true); // État pour contrôler la visibilité du curseur
    const intervalRef = useRef(null);
    const isAboutVisible = useRef(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const text1 = <FormattedMessage id="about.section.text1" defaultMessage="Welcome to Rem's Corp, your partner in crafting beautiful and functional websites. " />;
        const text2 = <FormattedMessage id="about.section.text2" defaultMessage="Founded in 2023 and located in Drôme, France, we specialize in developing websites for individuals and businesses. " />;
        const text3 = <FormattedMessage id="about.section.text3" defaultMessage="At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients." />;

        const fullText = `${text1.props.defaultMessage} ${text2.props.defaultMessage} ${text3.props.defaultMessage}`;
        let currentIndex = 0;
        
        const startTyping = () => {
            let text = ''; // Variable locale pour gérer le texte affiché

            intervalRef.current = setInterval(() => {
                if (currentIndex < fullText.length) {
                    text += fullText[currentIndex];
                    setDisplayedText(text);
                    currentIndex++;
                } else {
                    clearInterval(intervalRef.current); // Arrêter l'intervalle une fois tout le texte affiché
                    setShowCursor(false); // Cacher le curseur à la fin de l'animation
                }
            }, 20); // Vitesse de frappe (20ms par caractère)
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    if (!isAboutVisible.current) {
                        isAboutVisible.current = true;
                        startTyping();
                    }
                } else {
                    clearInterval(intervalRef.current);
                    setDisplayedText('');
                    setShowCursor(true);
                    isAboutVisible.current = false;
                    currentIndex = 0;
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(aboutRef.current);

        return () => {
            observer.disconnect();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section
            id="about"
            ref={aboutRef}
            className="relative min-h-screen bg-cover bg-center flex justify-center items-start"
            style={{ 
                backgroundImage: `url('/logopc.png')`, // Image de fond
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur de fond avec opacité
                backgroundSize: 'cover', // Ajuster la taille de l'image de fond
                backgroundPosition: 'center', // Centrer l'image de fond
                paddingTop: '8vh', // Marge intérieure ajustée pour l'espacement
                filter: 'brightness(80%)', // Luminosité réduite à 80% uniquement pour l'image de fond
            }}
        >
            {/* Superposition grise */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenu principal avec coins arrondis */}
            <div className="container mx-auto text-center relative z-10 py-16">
                {/* Bannière rouge */}
                <div className="bg-red-600 w-full py-4 shadow-lg mb-8 rounded-xl absolute top-0 left-0 right-0 flex justify-center">
                    <h2 className="text-4xl text-white mt-2">
                        <FormattedMessage id="about.section.title" defaultMessage="À propos de nous" />
                    </h2>
                </div>

                {/* Contenu texte avec effet de machine à écrire et curseur */}
                <p className="text-lg mt-14 transition-opacity duration-1000 ease-in-out opacity-100 relative z-10 text-white">
                    {displayedText}
                    {showCursor && <span className="ml-1 text-white">|</span>}
                </p>
            </div>
        </section>
    );
}

export default About;
