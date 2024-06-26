import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
    {
        title: 'Image exemple projet 1',
        description: 'Description for project one. Texte explicatif.',
        image: 'project1.png', 
    },
    {
        title: 'Image exemple projet 2',
        description: 'Description for project two. Texte explicatif.',
        image: 'project2.png',
    },
    {
        title: 'Image exemple projet 3',
        description: 'Description for project three. Texte explicatif.',
        image: 'project3.png',
    },
];

const Work = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleThumbClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <section
            id="work"
            className="py-16 bg-gray-800 text-white"
            style={{ backgroundImage: 'url(workbg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Our Work</h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center z-10">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleThumbClick(index)}
                                className={`mx-2 p-1 rounded-full border-2 border-transparent ${selectedIndex === index ? 'border-white' : 'border-gray-400 hover:border-white'}`}
                                style={{ width: '10px', height: '10px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }}
                            />
                        ))}
                    </div>
                    <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
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
                                <img src={project.image} alt={project.title} className="w-full object-cover h-96" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div className="flex justify-center mt-4">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbClick(index)}
                                className={`mx-2 p-1 rounded-full border-2 border-transparent focus:outline-none ${selectedIndex === index ? 'border-white' : 'border-gray-400 hover:border-white'}`}
                                style={{ width: '50px', height: '50px', backgroundImage: `url(${project.image})`, backgroundSize: 'cover' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
