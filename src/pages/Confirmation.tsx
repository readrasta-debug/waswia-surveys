import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import logoWaswia from "@/assets/logo-waswia.png";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "artisan";

  const isArtisan = type === "artisan";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-waswia-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-waswia-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 space-y-8">
        {/* Success icon */}
        <div className="animate-scale-in">
          <div className="w-24 h-24 mx-auto rounded-full gradient-bg flex items-center justify-center shadow-waswia animate-pulse-glow">
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Logo */}
        <img
          src={logoWaswia}
          alt="WASWIA"
          className="mx-auto w-48 h-auto animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        />

        {/* Message */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-3xl font-bold gradient-text">Merci !</h1>
          <p className="text-lg text-foreground">
            Votre participation est précieuse pour le développement de l'artisanat comorien.
          </p>
          <p className="text-muted-foreground">
            {isArtisan
              ? "Vos réponses nous aideront à mieux comprendre vos besoins en tant qu'artisan."
              : "Vos réponses nous aideront à mieux comprendre les attentes des visiteurs."}
          </p>
        </div>

        {/* Return button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/">
            <Button variant="hero" size="xl" className="w-full">
              <Home className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
