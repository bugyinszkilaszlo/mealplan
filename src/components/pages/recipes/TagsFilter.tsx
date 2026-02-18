'use client';

import styles from './FilterSection.module.css';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
  return (
    <div className={styles.filterSection}>
      <h3 className={styles.sectionTitle}>Címkék</h3>
      <ToggleGroup
        type='multiple'
        value={selected}
        onValueChange={onChange}
        variant='outline'
        spacing={2}
      >
        {tags.map((tag) => (
          <ToggleGroupItem key={tag.id} value={tag.id} aria-label={tag.label}>
            {tag.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
