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
// Composant pour afficher les étoiles
const Stars = ({ rating }) => (
    <div className="flex items-center justify-center mb-2">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
            </svg>
        ))}
    </div>
);

// Composant Testimonials pour afficher les témoignages
const Testimonials = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="testimonials" className="min-h-screen bg-gray-800 relative overflow-hidden">
            <div className="container mx-auto text-center relative z-10 flex flex-col justify-center py-16">
                {/* Titre de la section encadré en rouge avec bordure épaisse */}
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-white border-4 border-red-500 p-6 rounded-lg shadow-2xl">
                    Testimonials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card p-6 rounded-lg text-white shadow-lg bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center relative cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setSelected(index)}
                        >
                            <div className="flex items-center mb-2">
                                <img
                                    src={`https://flagcdn.com/24x18/${testimonial.countryCode}.png`}
                                    alt={testimonial.country}
                                    className="w-6 h-4 mr-2 rounded shadow"
                                />
                                <span className="font-bold text-lg">{testimonial.name}</span>
                            </div>
                            <span className="text-sm text-gray-200 mb-2">{testimonial.country}</span>
                            <p className="text-gray-100 mb-4 line-clamp-2">
                                {testimonial.content.length > 60
                                    ? testimonial.content.slice(0, 60) + '...'
                                    : testimonial.content}
                            </p>
                            <button className="mt-auto text-xs text-gray-300 bg-black/30 px-3 py-1 rounded hover:bg-black/50">
                                Voir l'avis
                            </button>
                        </div>
                    ))}
                </div>

                {/* Popup modale */}
                {selected !== null && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                        onClick={() => setSelected(null)}
                    >
                        <div
                            className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                                onClick={() => setSelected(null)}
                                aria-label="Fermer"
                            >
                                &times;
                            </button>
                            <div className="flex items-center mb-2">
                                <img
                                    src={`https://flagcdn.com/32x24/${testimonials[selected].countryCode}.png`}
                                    alt={testimonials[selected].country}
                                    className="w-8 h-6 mr-3 rounded shadow"
                                />
                                <span className="font-bold text-xl text-gray-800">{testimonials[selected].name}</span>
                            </div>
                            <span className="text-gray-600 mb-2 block">{testimonials[selected].country}</span>
                            <Stars rating={testimonials[selected].rating} />
                            <p className="text-gray-900 mt-4">{testimonials[selected].content}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
