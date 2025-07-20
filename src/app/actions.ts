"use server";

import { generatePatternSuggestions, PatternSuggestionInput } from '@/ai/flows/pattern-suggestion';
import { z } from 'zod';

const inputSchema = z.object({
  garmentDescription: z.string().min(10, { message: 'Description must be at least 10 characters long.' }),
});

type State = {
  message: string;
  suggestions: string[];
  errors?: {
    garmentDescription?: string[];
  } | null;
};

export async function getPatternSuggestionsAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = inputSchema.safeParse({
    garmentDescription: formData.get('garmentDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid input.',
      suggestions: [],
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generatePatternSuggestions(validatedFields.data as PatternSuggestionInput);
    if (result && result.patternSuggestions) {
      return {
        message: 'Suggestions generated successfully.',
        suggestions: result.patternSuggestions,
        errors: null,
      };
    } else {
       return { message: 'AI could not generate suggestions.', suggestions: [], errors: null };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again.', suggestions: [], errors: null };
  }
}
