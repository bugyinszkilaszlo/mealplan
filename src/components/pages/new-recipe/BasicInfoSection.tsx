import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/custom/Box';
import { Input } from '@/components/ui/input';
import { Field } from '@/components/ui/custom/Field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BasicInfoSectionProps {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  mealGroup: string;
  mealType: string;
  labels?: string;
  imagePreview: string;
  onTitleChange: (value: string) => void;
  onPrepTimeChange: (value: string) => void;
  onCookTimeChange: (value: string) => void;
  onServingsChange: (value: number) => void;
  onDifficultyChange: (value: string) => void;
  onMealGroupChange: (value: string) => void;
  onMealTypeChange: (value: string) => void;
  onLabelsChange: (value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfoSection = ({
  title,
  prepTime,
  cookTime,
  servings,
  difficulty,
  mealGroup,
  mealType,
  labels = '',
  imagePreview,
  onTitleChange,
  onPrepTimeChange,
  onCookTimeChange,
  onServingsChange,
  onDifficultyChange,
  onMealGroupChange,
  onMealTypeChange,
  onLabelsChange,
  onImageChange,
}: BasicInfoSectionProps) => {
  return (
    <Box title='Alapvető információk'>
      <Field label='Cím' htmlFor='title' required>
        <Input
          type='text'
          id='title'
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          required
        />
      </Field>

      <Field label='Recept képe' htmlFor='imageFile' required>
        <Input
          type='file'
          id='imageFile'
          accept='image/*'
          onChange={onImageChange}
          required
        />
        {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt='Recept előnézete' />
          </div>
        )}
      </Field>

      <div className={styles.fieldGroup}>
        <Field label='Előkészítési idő (percek)' htmlFor='prepTime' required>
          <Input
            type='number'
            id='prepTime'
            value={prepTime}
            onChange={(e) => onPrepTimeChange(e.target.value)}
            placeholder='20'
            required
            min='0'
          />
        </Field>

        <Field label='Főzési/Sütési idő (percek)' htmlFor='cookTime' required>
          <Input
            type='number'
            id='cookTime'
            value={cookTime}
            onChange={(e) => onCookTimeChange(e.target.value)}
            placeholder='60'
            required
            min='0'
          />
        </Field>
      </div>

      <div className={styles.fieldGroup}>
        <Field label='Adagok' htmlFor='servings' required>
          <Input
            type='number'
            id='servings'
            value={servings}
            onChange={(e) => onServingsChange(Number(e.target.value))}
            min='1'
            required
          />
        </Field>
        <Field label='Csoport' htmlFor='mealGroup' required>
          <Select value={mealGroup} onValueChange={onMealGroupChange}>
            <SelectTrigger id='mealGroup' className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position='popper' sideOffset={4}>
              <SelectItem value='BREAKFAST'>Reggeli</SelectItem>
              <SelectItem value='BRUNCH'>Brunch</SelectItem>
              <SelectItem value='LUNCH'>Ebéd</SelectItem>
              <SelectItem value='SNACK'>Snack</SelectItem>
              <SelectItem value='DINNER'>Vacsora</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label='Nehézség' htmlFor='difficulty' required>
          <Select value={difficulty} onValueChange={onDifficultyChange}>
            <SelectTrigger id='difficulty' className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position='popper' sideOffset={4}>
              <SelectItem value='EASY'>Könnyű</SelectItem>
              <SelectItem value='MEDIUM'>Közepes</SelectItem>
              <SelectItem value='HARD'>Nehéz</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <div className={styles.fieldGroup}>
        <Field label='Típus' htmlFor='mealType' required>
          <Select value={mealType} onValueChange={onMealTypeChange}>
            <SelectTrigger id='mealType' className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position='popper' sideOffset={4}>
              <SelectItem value='STARTER'>Előétel</SelectItem>
              <SelectItem value='MAIN'>Főétel</SelectItem>
              <SelectItem value='DESSERT'>Desszert</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field label='Címkék (vesszõvel elválasztva)' htmlFor='labels'>
          <Input
            type='text'
            id='labels'
            value={labels}
            onChange={(e) => onLabelsChange(e.target.value)}
            placeholder='pl. glutenmentes, gyors, gazdaságos'
          />
        </Field>
      </div>
    </Box>
  );
};

export default BasicInfoSection;
