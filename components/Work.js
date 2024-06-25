import React from 'react';

const projects = [
    {
        title: 'image Premier projet',
        description: 'Description for project one. Texte explicatif.',
        image: 'project1.jpg',
    },
    {
        title: 'image Deuxième projet',
        description: 'Description for project two. Texte explicatif.',
        image: 'project2.jpg',
    },
    {
        title: 'image Troisième projet',
        description: 'Description for project three. Texte explicatif.',
        image: 'project3.jpg',
    },
];

const Work = () => {
    return (
        <section id="work" className="py-16 bg-gray-800 text-white h-full">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Our Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3> {/* Titre en gras*/}
                                <p className="text-gray-300">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
