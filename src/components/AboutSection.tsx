import { Badge } from "@/components/ui/badge";
import { Award, Star, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          О мастере
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
              <img src="img/penguin.jpg" width="-1" height="-1"
              alt="Полина - Тату мастер"
              className="w-80 h-80 rounded-full mx-auto lg:mx-0 mb-8 object-cover border-4 border-black"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black mb-4">Полина</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-black text-white">Ведущий мастер</Badge>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Полина - начинающий мастер татуировки. Специализируется на стилях популярных работ.
            </p>
            <div className="space-y-3 text-gray-700">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
