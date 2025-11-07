import { MapPin } from "lucide-react";
import mecLogo from "@/assets/mec-logo.png";

const MECHero = () => {
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-background via-background to-secondary-light/30">
      {/* Animated background shapes */}
      <div className="bg-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Top Bar - Header & Corners */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex justify-between items-start relative z-10">
        {/* Top Left Corner - TNEA Code Box */}
        <div className="bg-background border-2 border-primary rounded-lg p-3 sm:p-4 shadow-elevation animate-fade-in">
          <p className="text-xs sm:text-sm font-bold text-primary">TNEA CODE: 1203</p>
          <p className="text-xs text-muted-foreground mt-0.5">Chennai</p>
        </div>

        {/* Top Right Corner - College Logo */}
        <div className="animate-fade-in animate-float">
          <img
            src={mecLogo}
            alt="Madras Engineering College Logo"
            className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Main Center Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
          
          {/* Big Headline - Bold, Black */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
            Let's Start The Journey
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in
          </p>

          {/* Purple-bordered Box with Specializations */}
          <div className="relative group mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur-sm transition-all"></div>
            <div className="relative bg-background border-2 border-primary rounded-2xl p-6 sm:p-8 md:p-10 shadow-glow">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-relaxed">
                IT, Computer Science, Data Science,<br className="hidden sm:block" />
                Artificial Intelligence, Machine Learning,<br className="hidden sm:block" />
                Cybersecurity & Business Systems
              </p>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium pt-4">
            Step into a world of opportunities with world-class companies.
          </p>

          {/* Company Logos - Horizontal Display */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 py-6 sm:py-8">
            {companies.map((company, index) => (
              <div 
                key={company.name} 
                className="flex items-center justify-center h-8 sm:h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-auto object-contain filter drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer of Hero Section - Location */}
      <div className="container mx-auto px-4 py-6 sm:py-8 animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors group">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-base sm:text-lg md:text-xl font-medium">Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  );
};

export default MECHero;
