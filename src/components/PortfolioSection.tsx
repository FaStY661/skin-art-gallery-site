
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop",
      alt: "Тату работа 1",
      category: "Реализм"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop",
      alt: "Тату работа 2", 
      category: "Графика"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop",
      alt: "Тату работа 3",
      category: "Минимализм"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=500&fit=crop",
      alt: "Тату работа 4",
      category: "Черно-белое"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=500&fit=crop",
      alt: "Тату работа 5",
      category: "Цветное"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop",
      alt: "Тату работа 6",
      category: "Абстрактное"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">НАШИ</span>{" "}
            <span className="text-red-500">РАБОТЫ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите на некоторые из наших лучших работ - каждая татуировка уникальна и создана с особым вниманием к деталям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image) => (
            <Card key={image.id} className="bg-gray-900 border-gray-700 overflow-hidden group hover:border-red-600 transition-colors">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">{image.category}</h3>
                      <p className="text-red-400">Нажмите для просмотра</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Хотите увидеть больше работ? Следите за нами в социальных сетях или посетите нашу студию!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
