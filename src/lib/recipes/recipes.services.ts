import { z } from "zod";
import { createRecipe } from "@/lib/recipes/recipes.repository";
import { Unit, MealGroup, MealType, Difficulty  } from "@/generated/prisma/client";

const newRecipeSchema = z.object({
  name: z.string().min(1),
  mealGroup: z.enum(MealGroup),
  mealType: z.enum(MealType),
  difficulty: z.enum(Difficulty),
  prepTime: z.number().min(0),
  cookTime: z.number().min(0),
  portions: z.number().min(1),
  imageUrl: z.string().optional(),
  labels: z.array(z.string()).optional(),
  ingredients: z.array(
    z.object({ name: z.string(), amount: z.number(), unit: z.enum(Unit) })
  ).optional(),
  tips: z.array(
    z.object({ name: z.string(), description: z.string() })
  ).optional(),
  instructions: z.array(
    z.object({ stepName: z.string(), description: z.string(), order: z.number() })
  ).optional(),
});

export const createNewRecipe = async (userId: string, data: unknown) => {
  const parsed = newRecipeSchema.parse(data);
  return createRecipe({ ...parsed, userId });
};