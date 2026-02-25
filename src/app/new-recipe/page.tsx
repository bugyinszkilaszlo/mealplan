'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from './page.module.css';
import { Ingredient, Instruction, Tip } from '@/types/recipe';
import BasicInfoSection from '@/components/pages/new-recipe/BasicInfoSection';
import IngredientsSection from '@/components/pages/new-recipe/IngredientsSection';
import InstructionsSection from '@/components/pages/new-recipe/InstructionsSection';
import TipsSection from '@/components/pages/new-recipe/TipsSection';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const recipeFormSchema = z.object({
  title: z.string().min(1, 'A cím megadása kötelező'),
  imageUrl: z.string(),
  imageFile: z.instanceof(File).nullable(),
  imagePreview: z.string(),
  prepTimeValue: z.number().min(1, 'Az előkészítési idő megadása kötelező'),
  prepTimeUnit: z.enum(['perc', 'óra']),
  cookTimeValue: z.number().min(1, 'A főzési idő megadása kötelező'),
  cookTimeUnit: z.enum(['perc', 'óra']),
  servings: z.number().min(1, 'Legalább 1 adag szükséges'),
  difficulty: z.enum(['Könnyű', 'Közepes', 'Nehéz']),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, 'A hozzávaló neve kötelező'),
        unit: z.string(),
        amount: z.number().min(0, 'A mennyiség nem lehet negatív'),
      }),
    )
    .min(1, 'Legalább 1 hozzávaló szükséges'),
  instructions: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().min(1, 'A leírás megadása kötelező'),
      }),
    )
    .min(1, 'Legalább 1 lépés szükséges'),
  tips: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),
});

type RecipeFormValues = z.infer<typeof recipeFormSchema>;

const NewRecipe = () => {
  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(recipeFormSchema),
    defaultValues: {
      title: '',
      imageUrl: '',
      imageFile: null,
      imagePreview: '',
      prepTimeValue: 30,
      prepTimeUnit: 'perc',
      cookTimeValue: 1,
      cookTimeUnit: 'óra',
      servings: 1,
      difficulty: 'Könnyű',
      ingredients: [{ name: '', unit: '', amount: 0 }],
      instructions: [{ title: '', description: '' }],
      tips: [{ title: '', description: '' }],
    },
  });

  const formData = form.watch();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        form.setValue('imageFile', file);
        form.setValue('imagePreview', reader.result as string);
        form.setValue('imageUrl', file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (data: RecipeFormValues) => {
    const recipeData = {
      ...data,
      prepTime: `${data.prepTimeValue} ${data.prepTimeUnit}`,
      cookTime: `${data.cookTimeValue} ${data.cookTimeUnit}`,
    };

    console.log('Recipe data:', recipeData);
    // TODO: Handle form submission (API call, file upload, etc.)
  };

  const addIngredient = () => {
    const currentIngredients = form.getValues('ingredients');
    form.setValue('ingredients', [
      ...currentIngredients,
      { name: '', unit: '', amount: 0 },
    ]);
  };

  const removeIngredient = (index: number) => {
    const currentIngredients = form.getValues('ingredients');
    form.setValue(
      'ingredients',
      currentIngredients.filter((_, i) => i !== index),
    );
  };

  const updateIngredient = (
    index: number,
    field: keyof Ingredient,
    value: string | number,
  ) => {
    const currentIngredients = form.getValues('ingredients');
    const newIngredients = [...currentIngredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    form.setValue('ingredients', newIngredients);
  };

  const addInstruction = () => {
    const currentInstructions = form.getValues('instructions');
    form.setValue('instructions', [
      ...currentInstructions,
      { title: '', description: '' },
    ]);
  };

  const removeInstruction = (index: number) => {
    const currentInstructions = form.getValues('instructions');
    form.setValue(
      'instructions',
      currentInstructions.filter((_, i) => i !== index),
    );
  };

  const updateInstruction = (
    index: number,
    field: keyof Instruction,
    value: string,
  ) => {
    const currentInstructions = form.getValues('instructions');
    const newInstructions = [...currentInstructions];
    newInstructions[index] = { ...newInstructions[index], [field]: value };
    form.setValue('instructions', newInstructions);
  };

  const addTip = () => {
    const currentTips = form.getValues('tips');
    form.setValue('tips', [...currentTips, { title: '', description: '' }]);
  };

  const removeTip = (index: number) => {
    const currentTips = form.getValues('tips');
    form.setValue(
      'tips',
      currentTips.filter((_, i) => i !== index),
    );
  };

  const updateTip = (index: number, field: keyof Tip, value: string) => {
    const currentTips = form.getValues('tips');
    const newTips = [...currentTips];
    newTips[index] = { ...newTips[index], [field]: value };
    form.setValue('tips', newTips);
  };

  return (
    <div className={styles.container}>
      <h1>Új recept</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={styles.form}
        >
          <BasicInfoSection
            title={formData.title}
            prepTimeValue={formData.prepTimeValue}
            prepTimeUnit={formData.prepTimeUnit}
            cookTimeValue={formData.cookTimeValue}
            cookTimeUnit={formData.cookTimeUnit}
            servings={formData.servings}
            difficulty={formData.difficulty}
            imagePreview={formData.imagePreview}
            onTitleChange={(value) => form.setValue('title', value)}
            onPrepTimeValueChange={(value) =>
              form.setValue('prepTimeValue', value)
            }
            onPrepTimeUnitChange={(value) =>
              form.setValue('prepTimeUnit', value)
            }
            onCookTimeValueChange={(value) =>
              form.setValue('cookTimeValue', value)
            }
            onCookTimeUnitChange={(value) =>
              form.setValue('cookTimeUnit', value)
            }
            onServingsChange={(value) => form.setValue('servings', value)}
            onDifficultyChange={(value) =>
              form.setValue(
                'difficulty',
                value as RecipeFormValues['difficulty'],
              )
            }
            onImageChange={handleImageChange}
          />

          <IngredientsSection
            ingredients={formData.ingredients}
            onAdd={addIngredient}
            onRemove={removeIngredient}
            onUpdate={updateIngredient}
          />

          <InstructionsSection
            instructions={formData.instructions}
            onAdd={addInstruction}
            onRemove={removeInstruction}
            onUpdate={updateInstruction}
          />

          <TipsSection
            tips={formData.tips}
            onAdd={addTip}
            onRemove={removeTip}
            onUpdate={updateTip}
          />

          <Button type='submit' className={styles.submitButton}>
            Recept létrehozása
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewRecipe;
