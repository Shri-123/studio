"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getPatternSuggestionsAction } from '@/app/actions';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Lightbulb } from 'lucide-react';

const initialState = {
  message: '',
  suggestions: [] as string[],
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
      {pending ? 'Generating...' : 'Suggest Patterns'}
    </Button>
  );
}

export default function PatternSuggestion({ garmentDescription }: { garmentDescription: string }) {
  const [state, formAction] = useFormState(getPatternSuggestionsAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="garmentDescription">Customer Instructions</Label>
        <Textarea
          id="garmentDescription"
          name="garmentDescription"
          defaultValue={garmentDescription}
          readOnly
          className="bg-secondary/70"
        />
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
      
      {state.suggestions && state.suggestions.length > 0 && (
        <div className="space-y-4 pt-4">
            <h4 className="font-semibold text-lg">Suggested Patterns:</h4>
            <Card className="bg-secondary/50">
                <CardContent className="p-4">
                    <ul className="space-y-2 list-disc list-inside">
                        {state.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-2">
                           <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                           <span>{suggestion}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      )}

      {state.message && state.suggestions.length === 0 && (
         <p className="text-sm text-muted-foreground pt-2">{state.message}</p>
      )}
    </form>
  );
}
