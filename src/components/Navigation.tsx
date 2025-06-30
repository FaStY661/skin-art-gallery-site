
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-gray-900 border-b border-red-600 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">
          INKWELL STUDIO
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-red-400 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-red-400 transition-colors">About</a>
          <a href="#portfolio" className="text-white hover:text-red-400 transition-colors">Portfolio</a>
          <a href="#contact" className="text-white hover:text-red-400 transition-colors">Contact</a>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          Book Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
