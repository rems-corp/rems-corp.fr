import { useState } from 'react';
import { useIntl } from 'react-intl';

// Tableau des témoignages //
const testimonials = [
    {
        name: "moussavfx",
        countryCode: "be",
        content: "Super entente meme a l'écoute après le deal, et travail soigné",
        rating: 5,
    },
    {
        name: "popipoui",
        countryCode: "fr",
        content: "J'ai eu le plaisir de collaborer avec cette personne, et je suis extrêmement satisfait. Les délais ont été respectés, la politesse était au rendez-vous, et le travail fourni était de très haute qualité. Je recommande vivement ses services!",
        rating: 5,
    },
    {
        name: "tarns244",
        countryCode: "gb",
        content: "Very understanding and easy to work with. Totally recommend it, awesome guy.",
        rating: 5,
    },
    {
        name: "amar_kumar_1",
        countryCode: "in",
        content: "First, man this guy did a great job in listening my project, and asking doubts about it, before properly starting .....at a very reasonable price. I'm grateful for that. And the quality of work and time taken is awesome. And still responding to my doubts about the project.",
        rating: 5,
    },
    {
        name: "opificiosonico",
        countryCode: "it",
        content: "Awesome seller! Speedy response and super smart programmer +++ Comunica molto bene in Italiano",
        rating: 5,
    },
    {
        name: "kyler410",
        countryCode: "us",
        content: "Rems_38 was very helpful and delivered exactly what I ordered with a fast delivery",
        rating: 5,
    },
    {
        name: "flynnspath",
        countryCode: "ch",
        content: "Great seller! Quick and efficient responses! He is very fluent in both French and English ! He was always here to answer any of my questions",
        rating: 5, 
    }
];

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
    const t = useIntl().formatMessage;
    const [selected, setSelected] = useState(null);
    const [page, setPage] = useState(0);

    const cardsPerPage = 6;
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

    const paginatedTestimonials = testimonials.slice(
        page * cardsPerPage,
        page * cardsPerPage + cardsPerPage
    );

    return (
        <section id="testimonials" className="min-h-screen bg-gray-800 relative overflow-hidden">
            <div className="container mx-auto text-center relative z-10 flex flex-col justify-center py-16">
                <h3 className="text-4xl lg:text-5xl font-bold mt-8 mb-8 text-white p-6 rounded-lg">
                    Testimonials
                </h3>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{
                        minHeight: "443px", // Ajuste la hauteur minimale pour garder la pagination en bas
                        alignContent: "start"
                    }}
                >
                    {paginatedTestimonials.map((testimonial, index) => (
                        <div
                            key={page * cardsPerPage + index}
                            className="testimonial-card p-6 rounded-lg text-white shadow-lg bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center relative cursor-pointer hover:scale-105 transition-transform"
                            onClick={() => setSelected(page * cardsPerPage + index)}
                        >
                            <div className="flex items-center mb-2">
                                <img
                                    src={`https://flagcdn.com/24x18/${testimonial.countryCode}.png`}
                                    alt={t({id: `country.${testimonial.countryCode}`})}
                                    className="w-6 h-4 mr-2 rounded shadow"
                                />
                                <span className="font-bold text-lg">{testimonial.name}</span>
                            </div>
                            <span className="text-sm text-gray-200 mb-2">{t({id: `country.${testimonial.countryCode}`})}</span>
                            <p className="text-gray-100 mb-4 line-clamp-2">
                                {testimonial.content.length > 60
                                    ? testimonial.content.slice(0, 60) + '...'
                                    : testimonial.content}
                            </p>
                            <button className="mt-auto text-xs text-gray-300 bg-black/30 px-3 py-1 rounded hover:bg-black/50">
                                {t({id: "testimonials.review"})}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-12 gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={page === 0}
                        className={`p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
                        aria-label="Précédent"
                    >
                        &#8592;
                    </button>
                    <span className="text-white text-sm">{page + 1} / {totalPages}</span>
                    <button
                        onClick={handleNext}
                        disabled={page === totalPages - 1}
                        className={`p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition ${page === totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                        aria-label="Suivant"
                    >
                        &#8594;
                    </button>
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
