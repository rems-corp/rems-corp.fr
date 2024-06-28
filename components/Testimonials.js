import React from 'react';

// Tableau des témoignages avec le terme "Profession"
const testimonials = [
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
    {
        name: 'Nom Prénom',
        position: 'Profession',
    },
];

// Composant Testimonials pour afficher les témoignages
const Testimonials = () => {
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
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-white border-4 border-red-500 p-4 rounded-lg shadow-lg">
                    Témoignages
                </h3>
                <div className="flex flex-wrap justify-center">
                    {/* Boucle sur chaque témoignage pour créer une carte */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="max-w-md mx-4 my-4 p-6 bg-white rounded-lg shadow-lg text-black">
                            {/* Nom générique du témoin */}
                            <h4 className="text-xl lg:text-2xl font-bold mb-2">Nom Prénom</h4>
                            {/* Profession du témoin */}
                            <p className="text-gray-600 mb-4">{testimonial.position}</p>
                            {/* Texte du témoignage */}
                            <p className="text-gray-700">"Avis Client"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;