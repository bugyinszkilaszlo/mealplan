export interface Ingredient {
  name: string;
  unit: string;
  amount: number;
}

export interface Instruction {
  title: string;
  description: string;
}

export interface Tip {
  title: string;
  description: string;
}

export interface Recipe {
  title: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: Tip[];
}

export interface RecipeFormData {
  title: string;
  imageUrl: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: Tip[];
}

export interface RecipeFormState extends RecipeFormData {
  imageFile: File | null;
  imagePreview: string;
}
