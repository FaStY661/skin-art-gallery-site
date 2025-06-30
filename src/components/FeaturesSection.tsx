
import { Card } from "@/components/ui/card";
import { Star, Clock, Shield, Award } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Why Choose <span className="text-red-500">Inkwell Studio</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black border-red-600 p-6 text-center hover:transform hover:scale-105 transition-all">
            <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">High-Quality Work</h3>
            <p className="text-gray-400">Premium materials and exceptional attention to detail in every piece</p>
          </Card>
          <Card className="bg-black border-red-600 p-6 text-center hover:transform hover:scale-105 transition-all">
            <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Fast & Efficient</h3>
            <p className="text-gray-400">Quick turnaround times without compromising on quality</p>
          </Card>
          <Card className="bg-black border-red-600 p-6 text-center hover:transform hover:scale-105 transition-all">
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Safety First</h3>
            <p className="text-gray-400">Sterile environment and top-tier hygiene standards</p>
          </Card>
          <Card className="bg-black border-red-600 p-6 text-center hover:transform hover:scale-105 transition-all">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Award-Winning</h3>
            <p className="text-gray-400">Recognized artists with years of experience and accolades</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
