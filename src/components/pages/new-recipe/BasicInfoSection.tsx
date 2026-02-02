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
    <Box title='Basic Information'>
      <div className={styles.field}>
        <label htmlFor='title'>Title *</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='imageFile'>Recipe Image *</label>
        <input
          type='file'
          id='imageFile'
          accept='image/*'
          onChange={onImageChange}
          required
        />
        {imagePreview && (
          <div className={styles.imagePreview}>
            <img src={imagePreview} alt='Recipe preview' />
          </div>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor='prepTime'>Prep Time *</label>
          <input
            type='text'
            id='prepTime'
            value={prepTime}
            onChange={(e) => onPrepTimeChange(e.target.value)}
            placeholder='20 minutes'
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='cookTime'>Cook Time *</label>
          <input
            type='text'
            id='cookTime'
            value={cookTime}
            onChange={(e) => onCookTimeChange(e.target.value)}
            placeholder='6-8 hours'
            required
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor='servings'>Servings *</label>
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
          <label htmlFor='difficulty'>Difficulty *</label>
          <select
            id='difficulty'
            value={difficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            required
          >
            <option value='Easy'>Easy</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
          </select>
        </div>
      </div>
    </Box>
  );
};

export default BasicInfoSection;
