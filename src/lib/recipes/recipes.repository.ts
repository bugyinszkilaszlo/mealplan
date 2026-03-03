import { prisma } from "@/lib/prisma"
import { RecipeInput } from "@/lib/recipes/recipe.types";

export const createRecipe = async (data: RecipeInput) => {
  return prisma.recipe.create({
    data: {
      name: data.name,
      userId: data.userId,
      mealGroup: data.mealGroup,
      mealType: data.mealType,
      difficulty: data.difficulty,
      prepTime: data.prepTime,
      cookTime: data.cookTime,
      portions: data.portions,
      imageUrl: data.imageUrl,
      ingredients: data.ingredients ? { create: data.ingredients } : undefined,
      tips: data.tips ? { create: data.tips } : undefined,
      instructions: data.instructions ? { create: data.instructions } : undefined,
      labels: data.labels ? {
        connectOrCreate: data.labels.map(name => ({
          where: { name },
          create: { name },
        })),
      } : undefined
    },
  });
};