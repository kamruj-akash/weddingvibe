import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, ArrowLeft, Heart, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc919cfb8dbf84749a9c45536caaf033b%2Fd013897df07747888eefd72c58fbde0e?format=webp&width=800"
                alt="Wedding Vibe Logo"
                className="h-8 w-8 animate-pulse"
              />
              <span className="text-xl font-bold">Wedding Vibe</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link to="/portfolio" className="text-foreground font-medium">
                Portfolio
              </Link>
              <Link
                to="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
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

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Camera className="w-4 h-4 mr-2" />
              Complete Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Photography</span> Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of captured moments from weddings, events,
              and special occasions in Faridpur and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="default"
              className="bg-primary text-primary-foreground"
            >
              All Photos
            </Button>
            <Button variant="outline">Weddings</Button>
            <Button variant="outline">Receptions</Button>
            <Button variant="outline">Pre-Wedding</Button>
            <Button variant="outline">Events</Button>
            <Button variant="outline">Portraits</Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Wedding Photos */}
            {[
              {
                id: 1,
                image:
                  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
                title: "Wedding Rings",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 2,
                image:
                  "https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg",
                title: "Romantic Couple",
                category: "Pre-Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 3,
                image:
                  "https://images.pexels.com/photos/20794974/pexels-photo-20794974.jpeg",
                title: "Wedding Reception",
                category: "Reception",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 4,
                image:
                  "https://images.pexels.com/photos/14270581/pexels-photo-14270581.jpeg",
                title: "Bridal Bouquet",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 5,
                image:
                  "https://images.pexels.com/photos/32652452/pexels-photo-32652452.jpeg",
                title: "Diamond Ring",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 6,
                image:
                  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
                title: "Wedding Ceremony",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 7,
                image:
                  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
                title: "Engagement Rings",
                category: "Pre-Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 8,
                image:
                  "https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg",
                title: "Couple Portrait",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 9,
                image:
                  "https://images.pexels.com/photos/20794974/pexels-photo-20794974.jpeg",
                title: "Reception Dance",
                category: "Reception",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 10,
                image:
                  "https://images.pexels.com/photos/14270581/pexels-photo-14270581.jpeg",
                title: "Wedding Flowers",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 11,
                image:
                  "https://images.pexels.com/photos/32652452/pexels-photo-32652452.jpeg",
                title: "Bridal Jewelry",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 12,
                image:
                  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
                title: "Garden Wedding",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 13,
                image:
                  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
                title: "Wedding Bands",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 14,
                image:
                  "https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg",
                title: "Love Story",
                category: "Pre-Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 15,
                image:
                  "https://images.pexels.com/photos/20794974/pexels-photo-20794974.jpeg",
                title: "Reception Party",
                category: "Reception",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 16,
                image:
                  "https://images.pexels.com/photos/14270581/pexels-photo-14270581.jpeg",
                title: "Bridal Details",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 17,
                image:
                  "https://images.pexels.com/photos/32652452/pexels-photo-32652452.jpeg",
                title: "Wedding Accessories",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 18,
                image:
                  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
                title: "Outdoor Ceremony",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 19,
                image:
                  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
                title: "Symbol of Love",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
              {
                id: 20,
                image:
                  "https://images.pexels.com/photos/2613458/pexels-photo-2613458.jpeg",
                title: "Perfect Moment",
                category: "Wedding",
                location: "Faridpur, Bangladesh",
              },
            ].map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${photo.id * 0.05}s` }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Overlay content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">{photo.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <MapPin className="w-3 h-3" />
                    <span>{photo.location}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span>2025</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs">
                    {photo.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Beautiful Memories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Wedding Vibe Photography capture your special moments with the
            same passion and creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4mQZ8xNyRdWXkF7VQtGZcU2qMj5LWgJbG3v9wP1rT8hZ2sA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Session
              </Button>
            </a>
            <Link to="/#contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc919cfb8dbf84749a9c45536caaf033b%2Fd013897df07747888eefd72c58fbde0e?format=webp&width=800"
                alt="Wedding Vibe Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Wedding Vibe</span>
            </Link>
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
