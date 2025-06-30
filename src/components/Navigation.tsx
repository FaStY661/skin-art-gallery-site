
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-red-600 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">
          CHAYA TATTOO
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-red-400 transition-colors"
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
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Записаться
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
