import React from 'react';
import Button from '../ui/button'; // Убедитесь, что путь к компоненту Button правильный

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-100">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-red-600">CHAYA</span>
          <span className="text-white"> TATTOO</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Превратите ваше видение в потрясающее искусство на теле
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-200 text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
          >
            Записаться на сеанс
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('portfolio')}
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
          >
            Посмотреть работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
