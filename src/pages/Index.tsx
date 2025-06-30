
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Send, Star, Clock, Shield, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 border-b border-red-600 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-red-500">
            INKWELL STUDIO
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-red-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-red-400 transition-colors">About</a>
            <a href="#portfolio" className="text-white hover:text-red-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors">Contact</a>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-950">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">PREMIUM</span>{" "}
            <span className="text-red-500">TATTOO</span>{" "}
            <span className="text-white">ART</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your vision into stunning body art with our world-class tattoo artists
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
            >
              Book an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
            >
              View Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* About the Artist Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About the <span className="text-red-500">Artist</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Marcus Rodriguez - Tattoo Artist" 
                className="w-80 h-80 rounded-full mx-auto lg:mx-0 mb-8 object-cover border-4 border-red-600"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Marcus Rodriguez</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-red-600 text-white">Lead Artist</Badge>
                <Badge className="bg-gray-700 text-white">15+ Years Experience</Badge>
                <Badge className="bg-gray-700 text-white">Award Winner</Badge>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Marcus is a master tattoo artist with over 15 years of experience in the industry. 
                Specializing in realistic portraits, traditional American, and neo-traditional styles, 
                he has built a reputation for creating stunning, one-of-a-kind pieces that tell each client's unique story.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-red-500 mr-3" />
                  <span>Best Tattoo Artist - City Awards 2023</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-red-500 mr-3" />
                  <span>Featured in Ink Magazine</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-red-500 mr-3" />
                  <span>Certified in Bloodborne Pathogen Safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Booking Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Contacts and <span className="text-red-500">Booking</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-black border-red-600 p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      1247 Ink Street, Arts District<br />
                      Los Angeles, CA 90013
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-TATS</p>
                    <p className="text-gray-300">+1 (555) 123-8287</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Send className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telegram</h4>
                    <p className="text-gray-300">@InkwellStudio</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-black border-red-600 p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Studio Hours</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white">12:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">12:00 PM - 8:00 PM</span>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold">
                Schedule Consultation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-red-600 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-red-500 mb-4">INKWELL STUDIO</div>
          <p className="text-gray-400">
            © 2024 Inkwell Studio. All rights reserved. | Follow us on social media for the latest works and updates.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
