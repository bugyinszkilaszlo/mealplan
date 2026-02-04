'use client';

import styles from './FilterSection.module.css';

interface TagsFilterProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const tags = [
  { id: 'vegan', label: 'Vegán' },
  { id: 'gyors', label: 'Gyors' },
  { id: 'high-protein', label: 'High protein' },
  { id: 'hal', label: 'Hal' },
  { id: 'marha', label: 'Marha' },
  { id: 'csirke', label: 'Csirke' },
  { id: 'sertes', label: 'Sertés' },
  { id: 'fozolek', label: 'Főzelék' },
  { id: 'egytaletel', label: 'Egytálétel' },
  { id: 'frissensult', label: 'Frissensült' },
  { id: 'egyszeru', label: 'Egyszerű' },
  { id: 'olcso', label: 'Olcsó' },
];

export default function TagsFilter({ selected, onChange }: TagsFilterProps) {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Címkék</h3>
      <div className={styles.optionsGrid}>
        {tags.map((tag) => (
          <button
            key={tag.id}
            type='button'
            className={`${styles.filterOption} ${
              selected.includes(tag.id) ? styles.active : ''
            }`}
            onClick={() => handleToggle(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
