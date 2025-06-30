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
          <div className="bg-black border border-white p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Свяжитесь с нами</h3>
            <div style="display: grid; gap: 1.5rem;">
              <div style="display: flex; align-items: flex-start;">
                <div style="width: 1.5rem; height: 1.5rem; color: white; margin-right: 1rem; margin-top: 0.25rem; flex-shrink: 0;">📍</div>
                <div>
                  <h4 style="color: white; font-weight: 600; margin-bottom: 0.25rem;">Адрес</h4>
                  <p style="color: #d1d5db;">
                    ул. Луначарского, д.311<br />
                    Краснодарский край, г.Крымск
                  </p>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="width: 1.5rem; height: 1.5rem; color: white; margin-right: 1rem; margin-top: 0.25rem; flex-shrink: 0;">📞</div>
                <div>
                  <h4 style="color: white; font-weight: 600; margin-bottom: 0.25rem;">Телефон</h4>
                  <p style="color: #d1d5db;">+7 (964) 927 26 40</p>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="width: 1.5rem; height: 1.5rem; color: white; margin-right: 1rem; margin-top: 0.25rem; flex-shrink: 0;">✉️</div>
                <div>
                  <h4 style="color: white; font-weight: 600; margin-bottom: 0.25rem;">Telegram</h4>
                  <p style="color: #d1d5db;">@tattoo_chaya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-black border border-white p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Запись на консультацию</h3>
              <div className="flex-grow mb-8 flex items-center justify-center">
                <p className="text-white text-center">Свяжитесь с нами для записи на консультацию</p>
              </div>
              <a 
                href="https://t.me/tattoo_chaya" 
                target="_blank"
                style="display: block; width: 100%; background-color: white; color: black; padding: 0.75rem; font-size: 1.125rem; font-weight: 600; text-align: center; border-radius: 0.375rem; text-decoration: none;"
                onmouseover="this.style.backgroundColor='#e5e7eb'"
                onmouseout="this.style.backgroundColor='white'"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
