'use client';

import { useState } from 'react';
import Box from '@/components/ui/custom/Box';
import styles from './Filter.module.css';
import MealTimeFilter from './MealTimeFilter';
import CourseFilter from './CourseFilter';
import TagsFilter from './TagsFilter';

export interface FilterState {
  mealTimes: string[];
  courses: string[];
  tags: string[];
}

interface FilterProps {
  onFilterChange?: (filters: FilterState) => void;
  filteredCount?: number;
}

export default function Filter({ onFilterChange, filteredCount }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    mealTimes: [],
    courses: [],
    tags: [],
  });

  const handleMealTimeChange = (selected: string[]) => {
    const newFilters = { ...filters, mealTimes: selected };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleCourseChange = (selected: string[]) => {
    const newFilters = { ...filters, courses: selected };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleTagsChange = (selected: string[]) => {
    const newFilters = { ...filters, tags: selected };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters = { mealTimes: [], courses: [], tags: [] };
    setFilters(emptyFilters);
    onFilterChange?.(emptyFilters);
  };

  const hasActiveFilters =
    filters.mealTimes.length > 0 ||
    filters.courses.length > 0 ||
    filters.tags.length > 0;

  return (
    <Box title='Szűrők' className={styles.filterBox}>
      {hasActiveFilters && (
        <span className={styles.resultCount}>{filteredCount} találat</span>
      )}

      <div
        className={`${styles.filterSections} ${hasActiveFilters && styles.hasActiveFilters}`}
      >
        <MealTimeFilter
          selected={filters.mealTimes}
          onChange={handleMealTimeChange}
        />
        <CourseFilter
          selected={filters.courses}
          onChange={handleCourseChange}
        />
        <TagsFilter selected={filters.tags} onChange={handleTagsChange} />
      </div>

      {hasActiveFilters && (
        <button
          type='button'
          className={styles.clearButton}
          onClick={clearAllFilters}
        >
          Összes törlése
        </button>
      )}
    </Box>
  );
}
