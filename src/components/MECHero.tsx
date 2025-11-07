import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import mecLogo from "@/assets/mec-logo.png";

const MECHero = () => {
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-background to-secondary-light">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-start">
        {/* Top Left - TNEA Code Box */}
        <div className="bg-background border-2 border-primary rounded-lg p-4 shadow-md animate-fade-in">
          <p className="text-sm font-semibold text-primary">TNEA CODE: 1203</p>
          <p className="text-sm text-muted-foreground mt-1">Chennai</p>
        </div>

        {/* Top Right - Logo */}
        <div className="animate-fade-in animation-delay-200">
          <img
            src={mecLogo}
            alt="MEC Logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in animation-delay-300">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
            Let's Start The Journey
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            India's 1st Engineering College Specialising in
          </p>

          {/* Courses Box */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary rounded-2xl p-6 md:p-8 shadow-elevation animate-fade-in animation-delay-400">
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              IT, Computer Science, Data Science,<br />
              Artificial Intelligence, Machine Learning,<br />
              Cybersecurity & Business Systems
            </p>
          </div>

          {/* Opportunities Text */}
          <p className="text-base md:text-lg text-muted-foreground animate-fade-in animation-delay-500">
            Step into a world of opportunities with world-class companies.
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-6 animate-fade-in animation-delay-600">
            {companies.map((company) => (
              <div key={company.name} className="flex items-center justify-center h-8 md:h-10 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in animation-delay-700">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg px-8 py-6 h-auto font-semibold group transition-all hover:scale-105"
            >
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 h-auto font-semibold transition-all hover:scale-105"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom - Location */}
      <div className="container mx-auto px-4 py-8 animate-fade-in animation-delay-800">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <span className="text-base md:text-lg">Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  );
};

export default MECHero;
