import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
const velocargoLogo = "/lovable-uploads/c6b34f92-a5b3-4d4b-8a6e-c6ab1ca44f14.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Formes animées en arrière-plan */}
      <div className="bg-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-8">
        <img src={velocargoLogo} alt="VelocargoPro" className="h-24 w-auto mx-auto mb-8" />
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
