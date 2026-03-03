import { Unit, MealGroup, MealType, Difficulty  } from "@/generated/prisma/client";

export interface IngredientInput {
  name: string;
  amount: number;
  unit: Unit;
}

export interface InstructionInput {
  stepName: string;
  description: string;
  order: number;
}

export interface TipInput {
  name: string;
  description: string;
}

export interface RecipeInput {
  name: string;
  userId: string;
  mealGroup: MealGroup;
  mealType: MealType;
  difficulty: Difficulty;
  prepTime: number;
  cookTime: number;
  portions: number;
  imageUrl?: string;

  ingredients?: IngredientInput[];
  instructions?: InstructionInput[];
  tips?: TipInput[];
  labels?: string[];
}

export interface RecipeOutput {
  id: string;
  name: string;
  userId: string;
  mealGroup: MealGroup;
  mealType: MealType;
  difficulty: Difficulty;
  prepTime: number;
  cookTime: number;
  portions: number;
  imageUrl?: string;
  createdAt: string;

  ingredients?: IngredientInput[];
  instructions?: InstructionInput[];
  tips?: TipInput[];
  labels?: string[];
}
