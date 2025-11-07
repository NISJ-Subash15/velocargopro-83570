import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import mecLogo from "@/assets/mec-logo.png";

const MECHero = () => {
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-background via-secondary-light to-primary/5">
      {/* Animated background shapes */}
      <div className="bg-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-start relative z-10">
        {/* Top Left - TNEA Code Box */}
        <div className="bg-background/80 backdrop-blur-sm border-2 border-primary/50 rounded-xl p-4 shadow-glow-purple animate-fade-in hover:scale-105 transition-all">
          <p className="text-sm font-bold text-primary">TNEA CODE: 1203</p>
          <p className="text-xs text-muted-foreground mt-1">Chennai</p>
        </div>

        {/* Top Right - Logo */}
        <div className="animate-fade-in animate-float">
          <img
            src={mecLogo}
            alt="MEC Logo"
            className="h-16 w-16 md:h-24 md:w-24 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Main Headline with gradient text */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent leading-tight animate-fade-in pb-2">
              Let's Start The Journey
            </h1>
            <div className="flex items-center justify-center gap-2 animate-pulse-soft">
              <Sparkles className="w-5 h-5 text-primary" />
              <Sparkles className="w-4 h-4 text-primary-light" />
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-3xl text-foreground font-semibold animate-fade-in">
            India's 1st Engineering College Specialising in
          </p>

          {/* Courses Box with enhanced gradient */}
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-3xl opacity-75 group-hover:opacity-100 blur transition-all animate-glow-pulse"></div>
            <div className="relative bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-8 md:p-10 shadow-elevation">
              <p className="text-lg md:text-2xl font-bold text-foreground leading-relaxed">
                IT, Computer Science, Data Science,<br />
                Artificial Intelligence, Machine Learning,<br />
                Cybersecurity & Business Systems
              </p>
            </div>
          </div>

          {/* Opportunities Text */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-in">
            Step into a world of opportunities with world-class companies.
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 py-8 animate-fade-in">
            {companies.map((company, index) => (
              <div 
                key={company.name} 
                className="flex items-center justify-center h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-auto object-contain filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 animate-fade-in">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-light shadow-glow text-lg px-10 py-7 h-auto font-bold group transition-all hover:scale-110 rounded-xl animate-pulse-button"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/60 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary text-lg px-10 py-7 h-auto font-bold transition-all hover:scale-110 rounded-xl shadow-elevation"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom - Location */}
      <div className="container mx-auto px-4 py-8 animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
          <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-lg md:text-xl font-medium">Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  );
};

export default MECHero;
