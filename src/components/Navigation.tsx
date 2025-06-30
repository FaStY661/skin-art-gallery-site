
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black border-b border-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          CHAYA TATTOO
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Главная
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-red-400 transition-colors"
          >
            О нас
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-red-400 transition-colors"
          >
            Портфолио
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-red-400 transition-colors"
          >
            Контакты
          </button>
        </div>
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-white hover:bg-gray-200 text-black"
        >
          Записаться
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
