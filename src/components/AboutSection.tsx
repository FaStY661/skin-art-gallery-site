
import { Badge } from "@/components/ui/badge";
import { Award, Star, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          О <span className="text-red-500">мастере</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Маркус Родригес - Тату мастер" 
              className="w-80 h-80 rounded-full mx-auto lg:mx-0 mb-8 object-cover border-4 border-red-600"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Маркус Родригес</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-red-600 text-white">Ведущий мастер</Badge>
              <Badge className="bg-gray-700 text-white">Опыт 15+ лет</Badge>
              <Badge className="bg-gray-700 text-white">Обладатель наград</Badge>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Маркус - мастер татуировки с более чем 15-летним опытом в индустрии. 
              Специализируется на реалистичных портретах, традиционном американском стиле и нео-традиционных работах. 
              Он построил репутацию благодаря созданию потрясающих уникальных произведений, которые рассказывают историю каждого клиента.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-red-500 mr-3" />
                <span>Лучший тату-мастер - Городские награды 2023</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-red-500 mr-3" />
                <span>Представлен в журнале Ink Magazine</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-red-500 mr-3" />
                <span>Сертифицирован по безопасности кровепереносимых патогенов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
