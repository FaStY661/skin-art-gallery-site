
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 1",
    },
    {
      id: 2,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 2", 
    },
    {
      id: 3,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 3",
    },
    {
      id: 4,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 4",
    },
    {
      id: 5,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 5",
    },
    {
      id: 6,
      src: "https://cdn.corenexis.com/view/?img=d/ju30/9MYI8F.jpg",
      alt: "Тату работа 6",
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
