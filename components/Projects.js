import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
    {
        title: 'Yinsh game in Python',
        description: 'Le jeu propose plusieurs modes : affrontez un autre joueur sur le même ordinateur, jouez contre l’IA, connectez-vous en local via deux PC en réseau, ou défiez des adversaires du monde entier en ligne. Deux modes de jeu sont disponibles, normal ou blitz, selon les règles classiques. L’interface conviviale met en évidence les déplacements possibles à chaque tour et détaille les actions de l’IA pour une meilleure compréhension. Les graphismes et l’interface ont été entièrement créés pour une expérience optimale.',
        image: 'https://cf.geekdo-images.com/a9Dco_g83IUWxrpxsw8ibw__opengraph/img/74phPN2CgM3gtbOs4tUwsiE62I8=/0x0:510x268/fit-in/1200x630/filters:strip_icc()/pic2844830.png', 
    },
    {
        title: "Cours pour la création d'app mobile",
        description: "Pendant plusieurs mois, j’ai eu le plaisir d’accompagner une personne dans la création de son application mobile avec Flutter Flow. Ensemble, nous avons exploré les concepts essentiels du développement mobile, de la prise en main de l’outil à la compréhension des widgets et de la navigation. J’ai apporté mon aide à chaque étape, de la conception des écrans à l’optimisation de l’interface, en partageant des conseils pratiques et des astuces pour structurer efficacement le projet. Cet accompagnement personnalisé a permis à la personne de progresser rapidement et de gagner en autonomie, tout en développant une application à la fois fonctionnelle et attrayante.",
        image: "https://cdn.prod.website-files.com/63c6a35ee97bea3e121bf3f4/65ba7491e40fedfb99bcc637_6400a42c1d0e4a0280784426_flutterflow.webp",
    },
];

const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleThumbClick = (index) => {
        setSelectedIndex(index);
        setIsPaused(true); // Stoppe le défilement au clic
    };

    // Arrête le défilement au survol ou au clic
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <section
            id="projects"
            className="min-h-screen py-8 sm:py-12 lg:py-16 bg-primary/60 text-white flex flex-col"
        >
            <div className="container mx-auto text-center px-2 sm:px-4 lg:px-8 flex-1 flex flex-col justify-center mt-[-45px] md:mt-0">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4 sm:mt-8 mb-4 sm:mb-8 text-white p-4 sm:p-6 rounded-lg">
                    Projects
                </h3>
                <div
                    className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseEnter}
                >
                    <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={false}
                        showStatus={false}
                        selectedItem={selectedIndex}
                        onChange={setSelectedIndex}
                        className="work-carousel"
                        renderArrowPrev={() => null}
                        renderArrowNext={() => null}
                        renderIndicator={() => null}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 bg-opacity-75 rounded-lg shadow-lg overflow-hidden mx-2 sm:mx-4"
                                style={{
                                    maxWidth: '320px',
                                    margin: '0 auto',
                                    ...(window.innerWidth >= 640 ? { maxWidth: 'none' } : {})
                                }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-32 sm:h-48 lg:h-64 object-cover"
                                />
                                <div className="p-2 sm:p-4 lg:p-6">
                                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base text-left">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbClick(index)}
                                className={`mx-1 sm:mx-2 flex items-center justify-center rounded-full border-2 border-transparent focus:outline-none transition-colors duration-200 ${selectedIndex === index ? 'border-white bg-white/20' : 'border-gray-400 hover:border-white bg-white/10'}`}
                                style={{ width: '32px', height: '32px', fontSize: '1rem', lineHeight: '1' }}
                            >
                                <span className="text-white font-semibold">{index + 1}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;