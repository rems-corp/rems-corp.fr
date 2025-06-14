import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-800 flex items-center">
            <div className="container mx-auto px-4 sm:px-4 py-12 sm:py-24 text-center text-white mt-[-35px]">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-8 sm:mb-8 text-white p-4 sm:p-6 rounded-lg">
                        <FormattedMessage id="about.section.title" />
                    </h3>
                    <p className="text-base text-xs md:text-xl leading-relaxed mb-6 sm:mb-8 text-white">
                        <FormattedMessage id="about.section.description" />
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4 sm:gap-0">
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg mb-4 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service1.title" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
                            <FormattedMessage id="about.section.service1.description" />
                        </p>
                    </div>
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg mb-4 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service2.title" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
                            <FormattedMessage id="about.section.service2.description" />
                        </p>
                    </div>
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service3.title" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
                            <FormattedMessage id="about.section.service3.description" />
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default About;