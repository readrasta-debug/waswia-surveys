import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  label: string;
  type: 'radio' | 'checkbox' | 'text' | 'textarea' | 'number';
  options?: string[];
  required?: boolean;
  placeholder?: string;
  maxSelect?: number;
}

interface QuestionFieldProps {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  error?: string;
}

export const QuestionField = ({ question, value, onChange, error }: QuestionFieldProps) => {
  const handleCheckboxChange = (option: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      if (question.maxSelect && currentValues.length >= question.maxSelect) {
        return; // Don't add if max reached
      }
      onChange([...currentValues, option]);
    } else {
      onChange(currentValues.filter((v) => v !== option));
    }
  };

  return (
    <div className="space-y-3 animate-fade-in">
      <Label className="text-base font-medium text-foreground flex items-start gap-2">
        <span>{question.label}</span>
        {question.required && <span className="text-destructive">*</span>}
        {question.maxSelect && (
          <span className="text-muted-foreground text-sm font-normal">
            (max {question.maxSelect})
          </span>
        )}
      </Label>

      {question.type === 'radio' && question.options && (
        <RadioGroup
          value={typeof value === 'string' ? value : ''}
          onValueChange={(v) => onChange(v)}
          className="grid gap-2"
        >
          {question.options.map((option) => (
            <div
              key={option}
              className={cn(
                "flex items-center space-x-3 rounded-xl border-2 border-border/50 p-4 cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-muted/50",
                typeof value === 'string' && value === option && "border-primary bg-primary/5"
              )}
            >
              <RadioGroupItem value={option} id={`${question.id}-${option}`} />
              <Label
                htmlFor={`${question.id}-${option}`}
                className="flex-1 cursor-pointer text-sm"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}

      {question.type === 'checkbox' && question.options && (
        <div className="grid gap-2">
          {question.options.map((option) => {
            const currentValues = Array.isArray(value) ? value : [];
            const isChecked = currentValues.includes(option);
            const isDisabled = question.maxSelect && currentValues.length >= question.maxSelect && !isChecked;
            
            return (
              <div
                key={option}
                className={cn(
                  "flex items-center space-x-3 rounded-xl border-2 border-border/50 p-4 cursor-pointer transition-all duration-200",
                  isChecked && "border-primary bg-primary/5",
                  !isChecked && !isDisabled && "hover:border-primary/50 hover:bg-muted/50",
                  isDisabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={isChecked}
                  disabled={isDisabled}
                  onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                />
                <Label
                  htmlFor={`${question.id}-${option}`}
                  className={cn("flex-1 text-sm", isDisabled ? "cursor-not-allowed" : "cursor-pointer")}
                >
                  {option}
                </Label>
              </div>
            );
          })}
        </div>
      )}

      {question.type === 'text' && (
        <Input
          type="text"
          placeholder={question.placeholder}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-colors"
        />
      )}

      {question.type === 'textarea' && (
        <Textarea
          placeholder={question.placeholder}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[100px] rounded-xl border-2 border-border/50 focus:border-primary transition-colors resize-none"
        />
      )}

      {question.type === 'number' && (
        <Input
          type="number"
          placeholder={question.placeholder}
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 rounded-xl border-2 border-border/50 focus:border-primary transition-colors"
        />
      )}

      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}
    </div>
  );
};
