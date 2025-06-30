import { Card } from "@/components/ui/card";
import { Star, Clock, Shield, Award } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Почему выбирают <span className="text-white">Inkwell Студию</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black border-white p-6 text-center hover:transform hover:scale-105 transition-all">
            <Star className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Высокое качество</h3>
            <p className="text-white">Премиальные материалы и исключительное внимание к деталям в каждой работе</p>
          </Card>
          <Card className="bg-black border-white p-6 text-center hover:transform hover:scale-105 transition-all">
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Быстро и эффективно</h3>
            <p className="text-white">Короткие сроки выполнения без ущерба для качества</p>
          </Card>
          <Card className="bg-black border-white p-6 text-center hover:transform hover:scale-105 transition-all">
            <Shield className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Безопасность прежде всего</h3>
            <p className="text-white">Стерильная среда и высочайшие стандарты гигиены</p>
          </Card>
          <Card className="bg-black border-white p-6 text-center hover:transform hover:scale-105 transition-all">
            <Award className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Награды и признание</h3>
            <p className="text-white">Признанные мастера с многолетним опытом и наградами</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;