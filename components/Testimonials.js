import React, { useState } from 'react';

// Tableau des témoignages //
const testimonials = [
    {
        name: 'Nom Prénom 1',
        position: 'Profession 1',
        content: 'Avis client pour Nom Prénom 1.',
    },
    {
        name: 'Nom Prénom 2',
        position: 'Profession 2',
        content: 'Avis client pour Nom Prénom 2.',
    },
    {
        name: 'Nom Prénom 3',
        position: 'Profession 3',
        content: 'Avis client pour Nom Prénom 3.',
    },
    {
        name: 'Nom Prénom 4',
        position: 'Profession 4',
        content: 'Avis client pour Nom Prénom 4.',
    },
    {
        name: 'Nom Prénom 5',
        position: 'Profession 5',
        content: 'Avis client pour Nom Prénom 5.',
    },
    {
        name: 'Nom Prénom 6',
        position: 'Profession 6',
        content: 'Avis client pour Nom Prénom 6.',
    },
];

// Composant Testimonials pour afficher les témoignages
const Testimonials = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (index) => {
        // Toggle pour agrandir ou réduire le cadre
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="testimonials" className="h-screen bg-gray-100 relative overflow-hidden">
            {/* Image de fond avec bords arrondis et prenant toute la page */}
            <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                    backgroundImage: `url('/pcdraw.png')`,
                    opacity: 0.9, // Opacité réduite à 90%
                }}
            />
            <div className="container mx-auto text-center relative z-10 flex flex-col justify-center h-full">
                {/* Titre de la section encadré en rouge avec bordure épaisse */}
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-white border-4 border-red-500 p-6 rounded-lg shadow-2xl animate-bounce">
                    Testimonials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Boucle sur chaque témoignage pour créer une carte */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`testimonial-card p-6 rounded-lg text-white shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative cursor-pointer`}
                            onClick={() => handleClick(index)}
                            style={{
                                background: `linear-gradient(to right top, #6C63FF, #7434F1, #7C0CB0)`, // Dégradé de couleurs pourpre, rose, rouge
                                minHeight: expandedIndex === index ? 'auto' : '10rem', // Hauteur minimale pour le cadre
                                maxHeight: expandedIndex === index ? 'auto' : '10rem', // Hauteur maximale pour le cadre
                                overflow: 'hidden', // Masquer le débordement
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: expandedIndex === index ? '2rem' : '1rem', // Augmenter le padding quand agrandi
                                cursor: 'pointer',
                                position: 'relative', // Assure que le positionnement absolu fonctionne correctement
                            }}
                        >
                            {/* Nom générique du témoin */}
                            <h4 className={`text-2xl font-bold mb-2 ${expandedIndex === index ? 'text-left' : ''}`}>
                                {testimonial.name}
                            </h4>
                            {/* Profession du témoin */}
                            {expandedIndex === index && (
                                <p className="text-gray-200 mb-4">{testimonial.position}</p>
                            )}
                            {/* Avis Client */}
                            {expandedIndex === index && (
                                <p className="text-gray-100">{testimonial.content}</p>
                            )}
                            {/* Texte "Cliquez pour voir l'avis" */}
                            {expandedIndex !== index && (
                                <p className="text-xs text-gray-400 absolute right-2 bottom-2">
                                    Cliquez pour voir l'avis
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
