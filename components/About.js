import React from 'react';
import FramedText from '../components/FramedText';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-800 text-white h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg">
                Welcome to our amazing company. We are dedicated to transforming ideas into digital reality.
                </p>
            </div>
        </section>
    );
}

export default About