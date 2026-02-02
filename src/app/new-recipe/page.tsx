'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Ingredient, Instruction, Tip, RecipeFormState } from '@/types/recipe';
import BasicInfoSection from '@/components/pages/new-recipe/BasicInfoSection';
import IngredientsSection from '@/components/pages/new-recipe/IngredientsSection';
import InstructionsSection from '@/components/pages/new-recipe/InstructionsSection';
import TipsSection from '@/components/pages/new-recipe/TipsSection';

const NewRecipe = () => {
  const [formData, setFormData] = useState<RecipeFormState>({
    title: '',
    imageUrl: '',
    imageFile: null,
    imagePreview: '',
    prepTime: '',
    cookTime: '',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [{ name: '', unit: '', amount: 0 }],
    instructions: [{ title: '', description: '' }],
    tips: [{ title: '', description: '' }],
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imageFile: file,
          imagePreview: reader.result as string,
          imageUrl: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recipe data:', formData);
    // TODO: Handle form submission (API call, file upload, etc.)
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: '', unit: '', amount: 0 }],
    });
  };

  const removeIngredient = (index: number) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((_, i) => i !== index),
    });
  };

  const updateIngredient = (
    index: number,
    field: keyof Ingredient,
    value: string | number,
  ) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, { title: '', description: '' }],
    });
  };

  const removeInstruction = (index: number) => {
    setFormData({
      ...formData,
      instructions: formData.instructions.filter((_, i) => i !== index),
    });
  };

  const updateInstruction = (
    index: number,
    field: keyof Instruction,
    value: string,
  ) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = { ...newInstructions[index], [field]: value };
    setFormData({ ...formData, instructions: newInstructions });
  };

  const addTip = () => {
    setFormData({
      ...formData,
      tips: [...formData.tips, { title: '', description: '' }],
    });
  };

  const removeTip = (index: number) => {
    setFormData({
      ...formData,
      tips: formData.tips.filter((_, i) => i !== index),
    });
  };

  const updateTip = (index: number, field: keyof Tip, value: string) => {
    const newTips = [...formData.tips];
    newTips[index] = { ...newTips[index], [field]: value };
    setFormData({ ...formData, tips: newTips });
  };

  return (
    <div className={styles.container}>
      <h1>New Recipe</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <BasicInfoSection
          title={formData.title}
          prepTime={formData.prepTime}
          cookTime={formData.cookTime}
          servings={formData.servings}
          difficulty={formData.difficulty}
          imagePreview={formData.imagePreview}
          onTitleChange={(value) => setFormData({ ...formData, title: value })}
          onPrepTimeChange={(value) =>
            setFormData({ ...formData, prepTime: value })
          }
          onCookTimeChange={(value) =>
            setFormData({ ...formData, cookTime: value })
          }
          onServingsChange={(value) =>
            setFormData({ ...formData, servings: value })
          }
          onDifficultyChange={(value) =>
            setFormData({ ...formData, difficulty: value })
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

        <button type='submit' className={styles.submitButton}>
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
