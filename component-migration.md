# Component Migration to shadcn/ui, kiboui

This document tracks the migration of custom components to shadcn/ui, kiboui components.

## Status Legend

- ⬜ Not Started
- 🟡 In Progress
- ✅ Complete

---

## Form Components (New Recipe Page)

---

## Layout Components

### ⬜ Sheet

Replace mobile menu implementation:

- `src/components/layout/TopNav.tsx` (hamburger menu → Sheet)

---

## Filter Components

### ⬜ Badge

Display active filters or recipe tags:

- Recipe detail pages (Display recipe tags)

### ⬜ Accordion

Make filter sections collapsible on mobile:

- `src/components/pages/recipes/Filter.tsx`

---

## Navigation Components

### ⬜ Navigation Menu

Could replace the TopNav implementation:

- `src/components/layout/TopNav.tsx`

---

### ⬜ Card

Replace or enhance existing components:

- `src/components/ui/custom/Box.tsx` → Use Card, CardHeader, CardTitle, CardContent
- `src/components/ui/custom/MealCard.tsx` → Use Card with CardContent

---

## Notes

- Always test responsiveness after migration
- Ensure accessibility features are maintained
- Keep existing CSS modules until fully migrated
- Update TypeScript types as needed
- Consider creating wrapper components for app-specific styling

---

---

---

# ✅ COMPLETED MIGRATIONS

---

---

---

## Form Components (New Recipe Page)

### ✅ Form

Wrap entire new recipe form with shadcn Form component:

- `src/app/new-recipe/page.tsx`

### ✅ Input

Replace all `<input>` elements with shadcn Input component:

- `src/components/pages/new-recipe/BasicInfoSection.tsx` (title, prepTime, cookTime, servings, file input)
- `src/components/pages/new-recipe/IngredientsSection.tsx` (name, amount, unit)

### ✅ Label

Replace all `<label>` elements with shadcn Label component:

- `src/components/pages/new-recipe/BasicInfoSection.tsx`
- `src/components/pages/new-recipe/IngredientsSection.tsx`

### ✅ Select

Replace difficulty dropdown:

- `src/components/pages/new-recipe/BasicInfoSection.tsx` (difficulty select)

### ✅ Textarea

Add for longer text inputs:

- `src/components/pages/new-recipe/InstructionsSection.tsx` (description field)
- `src/components/pages/new-recipe/TipsSection.tsx` (description field)

## Button Components

### ✅ Button

Replace all plain `<button>` elements:

- `src/components/pages/new-recipe/IngredientsSection.tsx` (Add/Remove buttons)
- `src/components/pages/new-recipe/InstructionsSection.tsx` (Add/Remove buttons)
- `src/components/pages/new-recipe/TipsSection.tsx` (Add/Remove buttons)
- `src/components/pages/recipes/Filter.tsx` ("Összes törlése" button)
- `src/components/pages/recipes/CourseFilter.tsx` (Filter option buttons)
- `src/components/pages/recipes/TagsFilter.tsx` (Filter option buttons)
- `src/components/pages/recipes/MealTimeFilter.tsx` (Filter option buttons)
- `src/components/layout/TopNav.tsx` (Mobile menu toggle)
- `src/app/new-recipe/page.tsx` (Submit button)
- `src/components/ui/custom/MealCard.tsx` ("Hozzáad" button)
- `src/components/pages/recipe/Header.tsx` ("Hozzáadás" button)

## Filter Components

### ✅ Toggle Group

Replace filter buttons with Toggle Group:

- `src/components/pages/recipes/CourseFilter.tsx` (Ł¦§¥©¦±¯©®, ¬©«©³, ¥©§©±¯©®, etc.)
- `src/components/pages/recipes/MealTimeFilter.tsx`
- `src/components/pages/recipes/TagsFilter.tsx`
