import { Calendar, CheckCircle2, Download, FileText, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const Admissions = () => {
  const eligibilityCriteria = [
    { title: "Academic Qualification", description: "Passed 12th standard (10+2) with Physics, Chemistry and Mathematics" },
    { title: "Minimum Marks", description: "60% aggregate in PCM for General category, 55% for OBC/SC/ST" },
    { title: "Entrance Exam", description: "Valid TNEA score (Tamil Nadu Engineering Admissions)" },
    { title: "Age Limit", description: "Candidates should have completed 17 years as on December 31st of admission year" }
  ];

  const importantDates = [
    { event: "Application Release", date: "May 1, 2025" },
    { event: "Last Date to Apply", date: "June 15, 2025" },
    { event: "Counseling Begins", date: "July 1, 2025" },
    { event: "Document Verification", date: "July 10-20, 2025" },
    { event: "Classes Begin", date: "August 1, 2025" }
  ];

  const applicationProcess = [
    { step: 1, title: "Online Registration", description: "Visit TNEA official portal and complete registration" },
    { step: 2, title: "Fill Application", description: "Enter academic details, upload required documents" },
    { step: 3, title: "Pay Application Fee", description: "₹500 for General, ₹250 for Reserved categories" },
    { step: 4, title: "Counseling", description: "Attend online/offline counseling as per schedule" },
    { step: 5, title: "Seat Allocation", description: "Check allotted seat and confirm admission" },
    { step: 6, title: "Document Verification", description: "Submit original documents at college" }
  ];

  const downloadableForms = [
    { name: "Admission Application Form", size: "2.5 MB", format: "PDF" },
    { name: "Document Checklist", size: "500 KB", format: "PDF" },
    { name: "Fee Structure 2025", size: "1.2 MB", format: "PDF" },
    { name: "Hostel Application Form", size: "1.8 MB", format: "PDF" }
  ];

  const handleDownload = (formName: string) => {
    // Simulate download
    console.log(`Downloading ${formName}`);
    alert(`${formName} download will begin shortly. This is a demo - actual forms will be available on the official website.`);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Admissions 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Join MEC Family
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Begin your journey towards excellence in engineering and technology
          </p>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Eligibility Criteria
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => (
              <div 
                key={criteria.title}
                className="bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">{criteria.title}</h4>
                <p className="text-sm text-muted-foreground">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Important Dates
          </h3>
          <div className="max-w-4xl mx-auto bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div 
                  key={item.event}
                  className="flex items-center justify-between p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item.event}</span>
                  </div>
                  <span className="text-primary font-bold text-sm sm:text-base">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Application Process
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationProcess.map((process, index) => (
                <div 
                  key={process.step}
                  className="relative bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 mt-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloadable Forms */}
        <div className="animate-fade-in">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Download Forms & Documents
          </h3>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
            {downloadableForms.map((form, index) => (
              <div 
                key={form.name}
                className="bg-background/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-300 shadow-lg group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">{form.name}</h4>
                      <p className="text-sm text-muted-foreground">{form.format} • {form.size}</p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleDownload(form.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
            >
              Contact Admissions Office
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
