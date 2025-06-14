import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-800 flex items-center">
            <div className="container mx-auto px-4 sm:px-4 py-12 sm:py-24 text-center text-white mt-[-35px]">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-8 mb-4 sm:mb-8 text-white p-4 sm:p-6 rounded-lg">
                        <FormattedMessage id="about.section.title" defaultMessage="About Us" />
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-white">
                        <FormattedMessage
                            id="about.section.description"
                            defaultMessage="Welcome to Rem's Corp, your partner in crafting beautiful and functional websites. Founded in 2023 and located in Drôme, France, we specialize in developing websites for individuals and businesses. At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients."
                        />
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4 sm:gap-0">
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg mb-4 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service1.title" defaultMessage="Web Design" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
                            <FormattedMessage
                                id="about.section.service1.description"
                                defaultMessage="We create stunning and user-friendly designs that captivate your audience."
                            />
                        </p>
                    </div>
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg mb-4 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service2.title" defaultMessage="Web Development" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
                            <FormattedMessage
                                id="about.section.service2.description"
                                defaultMessage="We create robust and scalable websites tailored to your business needs."
                            />
                        </p>
                    </div>
                    <div className="w-full max-w-xs p-4 bg-white bg-opacity-50 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                            <FormattedMessage id="about.section.service3.title" defaultMessage="Optimization" />
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white">
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