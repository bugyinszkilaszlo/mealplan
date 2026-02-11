'use client';

import {
  CalendarBody,
  CalendarDate,
  CalendarDatePagination,
  CalendarDatePicker,
  CalendarHeader,
  CalendarItem,
  CalendarMonthPicker,
  CalendarProvider,
  CalendarYearPicker,
  type Feature,
  type MealTime,
} from '@/components/ui/project-calendar';
import styles from './page.module.css';
import sampleRecipesData from './sampleRecipes.json';

const mealTimes: MealTime[] = [
  { id: 'reggeli', name: 'Reggeli', color: '#F59E0B' },
  { id: 'tizorai', name: 'Tízórai', color: '#10B981' },
  { id: 'ebed', name: 'Ebéd', color: '#EF4444' },
  { id: 'uzsonna', name: 'Uzsonna', color: '#8B5CF6' },
  { id: 'vacsora', name: 'Vacsora', color: '#3B82F6' },
];

const mealTimeMap = new Map(mealTimes.map((mt) => [mt.id, mt]));

const sampleRecipes: Feature[] = sampleRecipesData.map((recipe) => ({
  id: recipe.id,
  name: recipe.name,
  date: new Date(recipe.date),
  mealTime: mealTimeMap.get(recipe.mealTimeId)!,
  url: recipe.url,
}));

const earliestYear =
  sampleRecipes
    .map((recipe) => recipe.date.getFullYear())
    .sort()
    .at(0) ?? new Date().getFullYear();

const latestYear =
  sampleRecipes
    .map((recipe) => recipe.date.getFullYear())
    .sort()
    .at(-1) ?? new Date().getFullYear();

export default function CalendarTestPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Calendar</h1>

      <CalendarProvider className={styles.calendarWrapper} startDay={1}>
        <CalendarDate>
          <CalendarDatePicker>
            <CalendarMonthPicker />
            <CalendarYearPicker end={latestYear} start={earliestYear} />
          </CalendarDatePicker>
          <CalendarDatePagination />
        </CalendarDate>
        <CalendarHeader />
        <CalendarBody features={sampleRecipes}>
          {({ feature }) => <CalendarItem feature={feature} key={feature.id} />}
        </CalendarBody>
      </CalendarProvider>
    </div>
  );
}
