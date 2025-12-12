import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hammer, Users, Settings } from "lucide-react";
import logoWaswia from "@/assets/logo-waswia.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-waswia-turquoise/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-waswia-violet/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Admin button */}
      <Link
        to="/admin"
        className="absolute top-4 right-4 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
        title="Administration"
      >
        <Settings className="w-5 h-5 text-muted-foreground" />
      </Link>

      <div className="max-w-lg w-full space-y-12 text-center relative z-10">
        {/* Logo */}
        <div className="animate-fade-in">
          <img
            src={logoWaswia}
            alt="WASWIA Logo"
            className="mx-auto w-64 md:w-80 h-auto drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Enquête officielle du
            <span className="gradient-text block mt-1">Salon de l'Artisanat</span>
          </h1>
          <p className="text-muted-foreground">
            Aidez-nous à améliorer l'artisanat comorien en répondant à notre enquête
          </p>
        </div>

        {/* Survey buttons */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/artisan" className="block">
            <Button variant="hero" size="xl" className="w-full group">
              <Hammer className="w-6 h-6 transition-transform group-hover:rotate-12" />
              <span>Artisans exposants</span>
            </Button>
          </Link>

          <Link to="/visiteur" className="block">
            <Button variant="outline" size="xl" className="w-full group border-2">
              <Users className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Visiteurs / Particuliers</span>
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Vos réponses sont anonymes et confidentielles
        </p>
      </div>
    </div>
  );
};

export default Index;
