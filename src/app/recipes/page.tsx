'use client';

import { useState } from 'react';
import MealCard from '@/components/ui/custom/MealCard';
import Filter, { type FilterState } from '@/components/pages/recipes/Filter';
import styles from './page.module.css';
import recipesData from './recipes.json';

export default function RecipesPage() {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    mealTimes: [],
    courses: [],
    tags: [],
  });

  const handleFilterChange = (filters: FilterState) => {
    setActiveFilters(filters);
  };

  const filteredData = recipesData.filter((meal) => {
    if (
      activeFilters.mealTimes.length === 0 &&
      activeFilters.courses.length === 0 &&
      activeFilters.tags.length === 0
    ) {
      return true;
    }

    const matchesMealTime =
      activeFilters.mealTimes.length === 0 ||
      activeFilters.mealTimes.some((time) => meal.mealTimes.includes(time));

    const matchesCourse =
      activeFilters.courses.length === 0 ||
      activeFilters.courses.some((course) => meal.courses.includes(course));

    const matchesTags =
      activeFilters.tags.length === 0 ||
      activeFilters.tags.some((tag) => meal.tags.includes(tag));

    return matchesMealTime && matchesCourse && matchesTags;
  });

  return (
    <>
      <h1 className={styles.title}>Receptek</h1>
      <div className={styles.pageLayout}>
        <aside className={styles.sidebar}>
          <Filter
            onFilterChange={handleFilterChange}
            filteredCount={filteredData.length}
          />
        </aside>
        <div className={styles.content}>
          <ul className={styles.grid}>
            {filteredData.map((meal) => (
              <li key={meal.id}>
                <MealCard
                  url={meal.url}
                  thumbnail={meal.thumbnail}
                  title={meal.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
