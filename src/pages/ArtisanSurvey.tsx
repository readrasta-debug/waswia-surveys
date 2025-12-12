import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionField } from "@/components/QuestionField";
import { artisanSections } from "@/data/artisanQuestions";
import { ArrowLeft, ArrowRight, Send, Home } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import logoWaswia from "@/assets/logo-waswia.png";

const ArtisanSurvey = () => {
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentSection = artisanSections[currentSectionIndex];
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === artisanSections.length - 1;

  const handleFieldChange = useCallback((questionId: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  }, []);

  const validateSection = () => {
    for (const question of currentSection.questions) {
      if (question.required) {
        const value = formData[question.id];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toast.error(`Veuillez répondre à la question : ${question.label}`);
          return false;
        }
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateSection()) return;
    
    if (isLastSection) {
      handleSubmit();
    } else {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (!isFirstSection) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Store in localStorage for now (will be replaced with Supabase)
      const submissions = JSON.parse(localStorage.getItem("artisan_submissions") || "[]");
      submissions.push({
        ...formData,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
      });
      localStorage.setItem("artisan_submissions", JSON.stringify(submissions));
      
      toast.success("Votre réponse a été enregistrée !");
      navigate("/confirmation?type=artisan");
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container max-w-2xl py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5 text-muted-foreground" />
            </Link>
            <img src={logoWaswia} alt="WASWIA" className="h-8" />
            <div className="w-5" />
          </div>
          <ProgressBar
            current={currentSectionIndex + 1}
            total={artisanSections.length}
          />
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-2xl py-8 px-4">
        <div className="space-y-8">
          {/* Section header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold gradient-text">{currentSection.title}</h2>
            {currentSection.description && (
              <p className="text-muted-foreground">{currentSection.description}</p>
            )}
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {currentSection.questions.map((question) => (
              <div key={question.id} className="waswia-card">
                <QuestionField
                  question={question}
                  value={formData[question.id] || (question.type === 'checkbox' ? [] : '')}
                  onChange={(value) => handleFieldChange(question.id, value)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 p-4">
        <div className="container max-w-2xl flex gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={isFirstSection}
            className="flex-1"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Précédent</span>
          </Button>
          
          <Button
            variant="gradient"
            size="lg"
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex-1"
          >
            {isLastSection ? (
              <>
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Envoi..." : "Envoyer"}</span>
              </>
            ) : (
              <>
                <span>Suivant</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default ArtisanSurvey;
