
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioImages = [
    {
      id: 1,
       src: "https://i.pinimg.com/736x/71/a4/67/71a467f8a79a2211e3d270aacecb873a.jpg" alt="Фото"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/1c/9c/06/1c9c06d871abd6c586d1779cb1209f56.jpg" alt="Фото"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/f0/09/f5/f009f51661c25f5c5893f06f7f97834b.jpg" alt="Фото"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/originals/3f/a3/c1/3fa3c109b72c66fe14dcf850b5227e95.jpg" alt="Фото"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/6d/91/a5/6d91a577111ea5b23ac2481d56ba1e15.jpg" alt="Фото"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/e6/35/f5/e635f5d9124394846042921567b51203.jpg" alt="Фото"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">НАШИ</span>{" "}
            <span className="text-white">РАБОТЫ</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Посмотрите на некоторые из наших лучших работ - каждая татуировка уникальна и создана с особым вниманием к деталям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image) => (
            <Card key={image.id} className="bg-gray-900 border-gray-600 overflow-hidden group hover:border-white transition-colors">
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
                      <p className="text-gray-300">Нажмите для просмотра</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Хотите увидеть больше работ? Следите за нами в социальных сетях или посетите нашу студию!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
