import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  Heart,
  Star,
  Users,
  Calendar,
  Award,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc919cfb8dbf84749a9c45536caaf033b%2Fd013897df07747888eefd72c58fbde0e?format=webp&width=800"
                alt="Wedding Vibe Logo"
                className="h-10 w-10 animate-pulse"
              />
              <span className="text-xl font-bold">Wedding Vibe</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf4mQZ8xNyRdWXkF7VQtGZcU2qMj5LWgJbG3v9wP1rT8hZ2sA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        ></div>

        {/* Black Overlay with 30% opacity */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-20"></div>

        {/* Animated Elements */}
        <div className="absolute inset-0 z-30">
          <div className="grid grid-cols-4 gap-1 h-full opacity-10">
            <div className="bg-gradient-to-b from-primary/30 to-transparent animate-pulse"></div>
            <div className="bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-100"></div>
            <div className="bg-gradient-to-b from-primary/10 to-primary/30 animate-pulse delay-200"></div>
            <div className="bg-gradient-to-b from-transparent to-primary/20 animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent animate-fade-in-up delay-100">
            Capturing Life's
            <br />
            <span className="text-primary animate-pulse">
              Beautiful Moments
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Professional photography services for weddings, events, portraits,
            and special occasions. Creating timeless memories that last forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4mQZ8xNyRdWXkF7VQtGZcU2qMj5LWgJbG3v9wP1rT8hZ2sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Our Photography Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Professional photography services tailored to capture your most
              precious moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-primary animate-float" />
                </div>
                <CardTitle>Wedding Photography</CardTitle>
                <CardDescription>
                  Capture every precious moment of your special day with our
                  comprehensive wedding photography packages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pre-wedding consultation</li>
                  <li>• Full day coverage</li>
                  <li>• Edited digital gallery</li>
                  <li>• Print-ready images</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-primary animate-float delay-100" />
                </div>
                <CardTitle>Event Photography</CardTitle>
                <CardDescription>
                  Professional coverage for corporate events, parties, and
                  special celebrations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Corporate events</li>
                  <li>• Birthday parties</li>
                  <li>• Cultural celebrations</li>
                  <li>• Award ceremonies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up delay-400">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-primary animate-float delay-200" />
                </div>
                <CardTitle>Portrait Sessions</CardTitle>
                <CardDescription>
                  Professional portrait photography for individuals, families,
                  and professional headshots.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual portraits</li>
                  <li>• Family sessions</li>
                  <li>• Professional headshots</li>
                  <li>• Maternity photography</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Recent Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              A glimpse into our recent photography projects and captured
              moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                image:
                  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
                title: "Wedding Rings",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 2,
                image:
                  "https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg",
                title: "Romantic Couple",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 3,
                image:
                  "https://images.pexels.com/photos/20794974/pexels-photo-20794974.jpeg",
                title: "Wedding Reception",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 4,
                image:
                  "https://images.pexels.com/photos/14270581/pexels-photo-14270581.jpeg",
                title: "Bridal Bouquet",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 5,
                image:
                  "https://images.pexels.com/photos/32652452/pexels-photo-32652452.jpeg",
                title: "Diamond Ring",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 6,
                image:
                  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
                title: "Wedding Ceremony",
                location: "Faridpur, Bangladesh",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:scale-105 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${item.id * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Our Studio
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 2 years of experience in photography, we specialize in
                capturing authentic emotions and creating timeless memories. Our
                team of professional photographers brings creativity, technical
                expertise, and a passion for storytelling to every project.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Events Covered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold">Award-Winning Photography</p>
                  <p className="text-sm text-muted-foreground">
                    Recognized for excellence in wedding and event photography
                  </p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <Camera className="w-24 h-24 text-primary/40 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Ready to capture your special moments? Contact us to discuss your
              photography needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-left">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Studio</h3>
                  <a
                    href="https://maps.google.com/?q=Shukpak+Sharak,+Faridpur,+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Shukpak Sharak
                    <br />
                    Faridpur, Bangladesh
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a
                    href="tel:+8801781185444"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    01781-185444
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a
                    href="mailto:wasioussalam2000@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    wasioussalam2000@gmail.com
                  </a>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in-right hover:shadow-lg hover:shadow-primary/10 transition-all duration-500">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <input className="w-full px-3 py-2 border border-input rounded-md bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <input className="w-full px-3 py-2 border border-input rounded-md bg-background" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Event Type
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Wedding</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Portrait Session</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc919cfb8dbf84749a9c45536caaf033b%2Fd013897df07747888eefd72c58fbde0e?format=webp&width=800"
                alt="Wedding Vibe Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Wedding Vibe</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © 2024 Wedding Vibe Photography. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Creating beautiful memories, one frame at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
