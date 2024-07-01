// Work.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
    {
        title: 'Image exemple projet 1',
        description: 'Description pour le projet un. Texte explicatif.',
        image: 'project1.png', 
    },
    {
        title: 'Image exemple projet 2',
        description: 'Description pour le projet deux. Texte explicatif.',
        image: 'project2.png',
    },
    {
        title: 'Image exemple projet 3',
        description: 'Description pour le projet trois. Texte explicatif.',
        image: 'project3.png',
    },
];

const Work = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000); // Délai de 5 secondes entre chaque défilement

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const handleThumbClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <section
            id="work"
            className="h-screen min-h-screen py-12 lg:py-16 bg-gray-800 text-white"
            style={{ backgroundImage: 'url(workbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container mx-auto text-center px-4 lg:px-8 h-full flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Our Work</h2>
                <div className="max-w-5xl mx-auto relative">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={false} // Désactiver l'autoPlay natif
                        interval={5000} // Délai de 5 secondes entre chaque défilement
                        showStatus={false}
                        selectedItem={selectedIndex}
                        onChange={setSelectedIndex}
                        className="work-carousel"
                        renderArrowPrev={() => null} // Ne pas rendre la flèche précédente
                        renderArrowNext={() => null} // Ne pas rendre la flèche suivante
                        renderIndicator={() => null} // Ne pas rendre les indicateurs de diapositive
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-700 bg-opacity-75 rounded-lg shadow-lg overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full object-cover h-64 lg:h-80" />
                                <div className="p-4 lg:p-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm lg:text-base">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div className="flex justify-center mt-4 lg:mt-6">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbClick(index)}
                                className={`mx-2 p-1 rounded-full border-2 border-transparent focus:outline-none ${selectedIndex === index ? 'border-white' : 'border-gray-400 hover:border-white'}`}
                                style={{ width: '40px', height: '40px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;