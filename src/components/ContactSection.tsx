import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const handleBooking = () => {
    // Открываем Telegram или показываем информацию о записи
    window.open('https://t.me/tattoo_chaya', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Контакты и запись
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-black border-white p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Свяжитесь с нами</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Адрес</h4>
                  <p className="text-gray-300">
                    ул. Луначарского, д.311<br />
                    Краснодарский край, г.Крымск
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Телефон</h4>
                  <p className="text-gray-300">+7 (964) 927 26 40</p>
                </div>
              </div>
              <div className="flex items-start">
                <Send className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Telegram</h4>
                  <p className="text-gray-300">@tattoo_chaya</p>
                </div>
              </div>
            </div>
          </Card>
            </div>
            <Button 
              onClick={handleBooking}
              className="w-full bg-white hover:bg-gray-200 text-black py-3 text-lg font-semibold"
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