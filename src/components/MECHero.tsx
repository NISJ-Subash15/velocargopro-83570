import { MapPin, Award, Users, Building2, GraduationCap, Mail } from "lucide-react";
import mecLogo from "@/assets/mec-modern-logo.png";
import studentsGroup from "@/assets/students-group.jpg";
import modernLab from "@/assets/modern-lab.jpg";
import aiLab from "@/assets/ai-lab.jpg";
import placementCeremony from "@/assets/placement-ceremony.jpg";

const MECHero = () => {
  const companies = [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ];

  const stats = [
    { icon: Award, label: "100% Placement", value: "Record" },
    { icon: Users, label: "Students", value: "5000+" },
    { icon: Building2, label: "Modern Labs", value: "50+" },
    { icon: GraduationCap, label: "Years of Excellence", value: "200+" }
  ];

  const labFacilities = [
    { title: "AI & ML Lab", image: aiLab, description: "State-of-the-art artificial intelligence research" },
    { title: "Computer Lab", image: modernLab, description: "Latest hardware and software technology" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Animated background shapes */}
      <div className="bg-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Top Header Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex justify-between items-center relative z-10">
        {/* Top Left - College Logo + Name */}
        <div className="flex items-center gap-3 sm:gap-4 animate-fade-in">
          <img
            src={mecLogo}
            alt="Madras Engineering College Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain drop-shadow-xl rounded-full border-2 border-primary/20"
          />
          <div className="hidden sm:block">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground font-heading">
              Madras Engineering College
            </h2>
          </div>
        </div>

        {/* Top Right - TNEA Code Box */}
        <div className="bg-background border-2 border-primary rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-glow transition-all duration-300 animate-fade-in">
          <p className="text-xs sm:text-sm font-bold text-primary">TNEA CODE: 1203</p>
          <p className="text-xs text-muted-foreground mt-0.5">Chennai</p>
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
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in
          </p>

          {/* Glowing Specialization Box */}
          <div className="relative group mx-auto max-w-5xl">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl opacity-60 group-hover:opacity-100 blur-md transition-all duration-500 animate-pulse"></div>
            
            {/* Main box */}
            <div className="relative bg-gradient-to-br from-background/90 to-primary/5 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground leading-relaxed">
                IT, Computer Science, Data Science,<br className="hidden sm:block" />
                Artificial Intelligence, Machine Learning,<br className="hidden sm:block" />
                Cybersecurity & Business Systems
              </p>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium pt-4">
            Step into a world of opportunities with world-class companies.
          </p>

          {/* Company Logos - Horizontal Display with Grayscale to Color */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 py-6 sm:py-8">
            {companies.map((company, index) => (
              <div 
                key={company.name} 
                className="flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-125 cursor-pointer"
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

          {/* Contact Email */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground group pt-4">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
            <a 
              href="mailto:admissions@mec.edu.in" 
              className="text-base sm:text-lg md:text-xl font-semibold hover:text-primary transition-colors"
            >
              admissions@mec.edu.in
            </a>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-4 sm:p-6 text-center hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-primary mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Life Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground animate-fade-in">
            Our Students
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <img 
              src={studentsGroup}
              alt="MEC Students"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modern Lab Facilities Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground animate-fade-in">
            Modern Lab Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {labFacilities.map((lab, index) => (
              <div 
                key={lab.title}
                className="bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl overflow-hidden hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{lab.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{lab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Placement Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground animate-fade-in">
            100% Placement Record
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <img 
              src={placementCeremony}
              alt="Placement Ceremony"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-muted-foreground font-semibold">
            Our students secure positions at world's leading technology companies
          </p>
        </div>
      </div>

      {/* Location Section with Map */}
      <div className="container mx-auto px-4 py-8 sm:py-12 animate-fade-in relative z-10">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {/* Location Header */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground group">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Chennai, Tamil Nadu, India</span>
          </div>

          {/* Google Map Embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5348458676847!2d80.23296931482205!3d13.067438990778916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b7c8f8e25d%3A0x2b2e3e3e3e3e3e3e!2sCollege%20of%20Engineering%2C%20Guindy!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madras Engineering College Location"
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MECHero;
