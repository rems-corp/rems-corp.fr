import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
    const fullText = [
        "Welcome to Rem's Corp, your partner in crafting beautiful and functional websites. ",
        "Founded in 2023 and located in Drôme, France, we specialize in developing websites for individuals and businesses. ",
        "At Rem's Corp, we are dedicated to turning ideas into digital reality, delivering high-quality web solutions tailored to meet the unique needs of our clients."
    ].join(''); // Combine all text into one string

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        const startTyping = () => {
            setDisplayedText(''); // Clear previous text
            currentIndex = 0; // Reset index
            interval = setInterval(() => {
                if (currentIndex < fullText.length) {
                    setDisplayedText(prevText => prevText + fullText[currentIndex]);
                    currentIndex++;
                } else {
                    clearInterval(interval); // Stop the interval once all text is displayed
                    startCursorBlink(); // Start cursor blinking
                }
            }, 50); // Typing speed (50ms per character)
        };

        const startCursorBlink = () => {
            setInterval(() => {
                setShowCursor(prevShowCursor => !prevShowCursor); // Toggle cursor visibility
            }, 500); // Blink every 500ms
        };

        startTyping();

        return () => {
            clearInterval(interval); // Clear interval on component unmount
        };
    }, []); // Effect runs only once on mount

    return (
        <section
            id="about"
            className="relative py-16 bg-gray-800 text-white h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/info.jpg')` }} // Background image
        >
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Main content with rounded corners */}
            <div className="container mx-auto text-center relative z-10 rounded-xl">
                {/* Red banner for "About Us" with customized color */}
                <div className="bg-red-600 w-full py-4 shadow-lg mb-8 rounded-xl">
                    <h2 className="text-4xl font-bold text-white">
                        <FormattedMessage id="about.section.title" defaultMessage="About Us" />
                    </h2>
                </div>

                {/* Text content with typewriter animation and cursor */}
                <p className="text-lg mt-4 transition-opacity duration-1000 ease-in-out opacity-100 relative">
                    {displayedText}
                    {showCursor && <span className="ml-1">|</span>}
                </p>

                {/* Image below the text */}
                <img src="/logopc.jpg" alt="Logo PC" className="mx-auto mt-8 rounded-xl shadow-lg" />
            </div>
        </section>
    );
}

export default About;
