
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-950">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">ПРЕМИУМ</span>{" "}
          <span className="text-red-500">ТАТУ</span>{" "}
          <span className="text-white">ИСКУССТВО</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Превратите ваше видение в потрясающее искусство на теле с нашими мастерами-татуировщиками мирового класса
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
          >
            Записаться на сеанс
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
          >
            Посмотреть работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
