import styles from '@/app/new-recipe/page.module.css';
import Box from '@/components/ui/Box';

interface BasicInfoSectionProps {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  imagePreview: string;
  onTitleChange: (value: string) => void;
  onPrepTimeChange: (value: string) => void;
  onCookTimeChange: (value: string) => void;
  onServingsChange: (value: number) => void;
  onDifficultyChange: (value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfoSection = ({
  title,
  prepTime,
  cookTime,
  servings,
  difficulty,
  imagePreview,
  onTitleChange,
  onPrepTimeChange,
  onCookTimeChange,
  onServingsChange,
  onDifficultyChange,
  onImageChange,
}: BasicInfoSectionProps) => {
  return (
    <Box title='Alapvető információk'>
      <div className={styles.field}>
        <label htmlFor='title'>Cím *</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='imageFile'>Recept képe *</label>
        <input
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
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor='prepTime'>Előkészítési idő *</label>
          <input
            type='text'
            id='prepTime'
            value={prepTime}
            onChange={(e) => onPrepTimeChange(e.target.value)}
            placeholder='20 perc'
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='cookTime'>Főzési idő *</label>
          <input
            type='text'
            id='cookTime'
            value={cookTime}
            onChange={(e) => onCookTimeChange(e.target.value)}
            placeholder='6-8 óra'
            required
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor='servings'>Adagok *</label>
          <input
            type='number'
            id='servings'
            value={servings}
            onChange={(e) => onServingsChange(Number(e.target.value))}
            min='1'
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='difficulty'>Nehézség *</label>
          <select
            id='difficulty'
            value={difficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            required
          >
            <option value='Easy'>Könnyű</option>
            <option value='Medium'>Közepes</option>
            <option value='Hard'>Nehéz</option>
          </select>
        </div>
      </div>
    </Box>
  );
};

export default BasicInfoSection;
