
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
              src="https://i.yapx.ru/ZrGZB.png" 
              alt="Полина - Тату мастер" 
              className="w-80 h-80 rounded-full mx-auto lg:mx-0 mb-8 object-cover border-4 border-red-600"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Полина</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-red-600 text-white">Ведущий мастер</Badge>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Полина - начинающий мастер татуировки
              Специализируется на традиционном американском стиле и нео-традиционных работах.
            </p>
            <div className="space-y-3 text-gray-300">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
