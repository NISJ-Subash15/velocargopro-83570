import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import mecHeroBackground from "@/assets/mec-hero-background.jpg";
import mecLogo from "@/assets/mec-logo.png";

const MECHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mecHeroBackground}
          alt="MEC Campus - Students coding in futuristic environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-secondary/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Animated Circuit Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" opacity="0.5" />
                <circle cx="90" cy="90" r="2" fill="white" opacity="0.5" />
                <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img
              src={mecLogo}
              alt="MEC Logo"
              className="h-24 md:h-32 w-auto drop-shadow-2xl animate-glow-pulse"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight animate-fade-in">
            Madras Engineering
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
              College
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Empowering the Next Generation of{" "}
            <span className="text-secondary-light font-bold">IT Innovators</span>
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-lg md:text-xl animate-fade-in animation-delay-300">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in animation-delay-400">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 h-auto font-semibold group transition-all hover:scale-105"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-semibold transition-all hover:scale-105"
            >
              Apply Now
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 animate-fade-in animation-delay-500">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm md:text-base">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-white/80 text-sm md:text-base">Students Enrolled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Placement Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MECHero;
