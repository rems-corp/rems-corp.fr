const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-800 text-white h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 border-4 border-red-500 rounded-lg inline-block px-4 py-2">
                    About Us
                </h2>
                <p className="text-lg">
                    Welcome to Rem's Corp, your partner in crafting beautiful and functional websites.
                </p>
                <p className="text-lg">
                    Founded in [year] and located in Drôme, France, we specialize in developing websites for individuals and businesses.
                </p>
                <p className="text-lg">
                    At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients.
                </p>
            </div>
        </section>
    );
}

export default About;
