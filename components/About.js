import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url('/logopc.png')` }}>
            <div className="container mx-auto px-4 py-24 text-center text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        <FormattedMessage id="about.section.title" defaultMessage="About Us" />
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-white">
                        <FormattedMessage
                            id="about.section.description"
                            defaultMessage="Welcome to Rem's Corp, your partner in crafting beautiful and functional websites. Founded in 2023 and located in Drôme, France, we specialize in developing websites for individuals and businesses. At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients."
                        />
                    </p>
                </div>

                <div className="flex justify-center space-x-4">
                    <div className="max-w-xs p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <h3 className="text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service1.title" defaultMessage="Web Design" />
                        </h3>
                        <p className="text-sm md:text-base text-white">
                            <FormattedMessage
                                id="about.section.service1.description"
                                defaultMessage="We create stunning and user-friendly designs that captivate your audience."
                            />
                        </p>
                    </div>
                    <div className="max-w-xs p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <h3 className="text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service2.title" defaultMessage="Web Development" />
                        </h3>
                        <p className="text-sm md:text-base text-white">
                            <FormattedMessage
                                id="about.section.service2.description"
                                defaultMessage="We create robust and scalable websites tailored to your business needs."
                            />
                        </p>
                    </div>
                    <div className="max-w-xs p-4 bg-gray-800 bg-opacity-50 rounded-lg">
                        <h3 className="text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service3.title" defaultMessage="Optimization" />
                        </h3>
                        <p className="text-sm md:text-base text-white">
                            <FormattedMessage
                                id="about.section.service3.description"
                                defaultMessage="We optimize your website to rank higher on search engines."
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;