const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-800 text-white h-screen">
            <div className="container mx-auto text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-700 w-full py-4 shadow-lg mb-8">
                    <h2 className="text-4xl font-bold text-white">
                        About Us
                    </h2>
                </div>
                <p className="text-lg mt-4 transition-transform duration-1000 ease-in-out transform translate-y-0 opacity-100">
                    Welcome to Rem's Corp, your partner in crafting beautiful and functional websites.
                </p>
                <p className="text-lg mt-2 transition-transform duration-1000 ease-in-out transform translate-y-0 opacity-100 delay-200">
                    Founded in [year] and located in Drôme, France, we specialize in developing websites for individuals and businesses.
                </p>
                <p className="text-lg mt-2 transition-transform duration-1000 ease-in-out transform translate-y-0 opacity-100 delay-400">
                    At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients.
                </p>
            </div>
        </section>
    );
}

export default About;
