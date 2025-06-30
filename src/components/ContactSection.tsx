
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const handleBooking = () => {
    // Открываем Telegram или показываем информацию о записи
    window.open('https://t.me/ChayaTattoo', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Контакты и <span className="text-red-500">запись</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-black border-red-600 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Свяжитесь с нами</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Адрес</h4>
                  <p className="text-gray-300">
                    ул. Инк, 1247, Арт-район<br />
                    Лос-Анджелес, CA 90013
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Телефон</h4>
                  <p className="text-gray-300">+1 (555) 123-TATS</p>
                  <p className="text-gray-300">+1 (555) 123-8287</p>
                </div>
              </div>
              <div className="flex items-start">
                <Send className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Telegram</h4>
                  <p className="text-gray-300">@ChayaTattoo</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-black border-red-600 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Часы работы студии</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-300">Понедельник - Пятница</span>
                <span className="text-white">12:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Суббота</span>
                <span className="text-white">11:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Воскресенье</span>
                <span className="text-white">12:00 - 20:00</span>
              </div>
            </div>
            <Button 
              onClick={handleBooking}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
            >
              Записаться на консультацию
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
