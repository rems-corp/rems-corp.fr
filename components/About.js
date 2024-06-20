import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    const [displayedText, setDisplayedText] = useState(''); // État pour gérer le texte affiché
    const [showCursor, setShowCursor] = useState(true); // État pour contrôler la visibilité du curseur

    // Texte complet à afficher avec effet de machine à écrire (en anglais)
    const fullText = [
        "Welcome to Rem's Corp, your partner in crafting beautiful and functional websites. ",
        "Founded in 2023 and located in Drôme, France, we specialize in developing websites for individuals and businesses. ",
        "At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients."
    ].join(''); // Combiner tout le texte en une seule chaîne

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        // Fonction pour démarrer l'effet de machine à écrire
        const startTyping = () => {
            interval = setInterval(() => {
                if (currentIndex < fullText.length) {
                    setDisplayedText(prevText => prevText + fullText[currentIndex]);
                    currentIndex++;
                } else {
                    clearInterval(interval); // Arrêter l'intervalle une fois tout le texte affiché
                    setTimeout(() => {
                        setDisplayedText(''); // Effacer le texte affiché
                        currentIndex = 0; // Réinitialiser l'index pour recommencer
                        startTyping(); // Redémarrer l'effet de machine à écrire
                    }, 2000); // Délai avant de réinitialiser (à ajuster si nécessaire)
                }
            }, 50); // Vitesse de frappe (50ms par caractère)
        };

        // Fonction pour démarrer le clignotement du curseur
        const startCursorBlink = () => {
            setInterval(() => {
                setShowCursor(prevShowCursor => !prevShowCursor); // Inverser la visibilité du curseur
            }, 500); // Clignoter toutes les 500ms
        };

        // Démarrer l'effet de machine à écrire et le clignotement du curseur lors du montage du composant
        startTyping();
        startCursorBlink();

        // Nettoyer l'intervalle lors du démontage du composant pour éviter les fuites de mémoire
        return () => {
            clearInterval(interval);
        };
    }, []); // Utiliser useEffect une seule fois au montage du composant

    return (
        <section
            id="about"
            className="relative min-h-screen bg-cover bg-center flex justify-center items-start"
            style={{ 
                backgroundImage: `url('/logopc.png')`, // Image de fond
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur de fond avec opacité
                backgroundSize: 'cover', // Ajuster la taille de l'image de fond
                backgroundPosition: 'center', // Centrer l'image de fond
                paddingTop: '8vh', // Marge intérieure ajustée pour l'espacement
                filter: 'brightness(150%)', // Luminosité augmentée à 150%
            }}
        >
            {/* Superposition grise */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenu principal avec coins arrondis */}
            <div className="container mx-auto text-center relative z-10 py-16">
                {/* Bannière rouge avec animation visuelle */}
                <div className="bg-red-700 w-full py-4 shadow-lg mb-8 rounded-xl absolute top-0 left-0 right-0 flex justify-center" style={{
                    animation: 'bounce 2s infinite', // Animation de rebondissement
                }}>
                    <h2 className="text-4xl font-bold text-white mt-2">
                        <FormattedMessage id="about.section.title" defaultMessage="À propos de nous" />
                    </h2>
                </div>

                {/* Contenu texte avec effet de machine à écrire et curseur */}
                <p className="text-lg mt-12 transition-opacity duration-1000 ease-in-out opacity-100 relative z-10 text-red-700 font-bold">
                    {displayedText}
                    {showCursor && <span className="ml-1 text-red-700 font-bold">|</span>}
                </p>
            </div>
        </section>
    );
}

export default About;
