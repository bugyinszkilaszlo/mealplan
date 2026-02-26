'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';
import { CalendarIcon, ChevronsUpDownIcon, CheckIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import recipes from '@/app/recipes/recipes.json';
import { MEAL_TIMES } from '@/types/recipe';

export default function AddToPlan() {
  const [recipeOpen, setRecipeOpen] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState<number | null>(
    null,
  );
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [dateOpen, setDateOpen] = React.useState(false);
  const [meal, setMeal] = React.useState<string>('');

  const selectedRecipeTitle = recipes.find(
    (r) => r.id === selectedRecipe,
  )?.title;

  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hozzáadás a tervhez</DialogTitle>
        </DialogHeader>

        <div className='flex flex-col gap-4 pt-2'>
          {/* Recipe combobox */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium'>Recept</label>
            <Popover open={recipeOpen} onOpenChange={setRecipeOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={recipeOpen}
                  className='w-full justify-between'
                >
                  {selectedRecipeTitle ?? 'Válassz receptet…'}
                  <ChevronsUpDownIcon className='ml-2 size-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-full p-0'>
                <Command>
                  <CommandInput placeholder='Recept keresése…' />
                  <CommandList>
                    <CommandEmpty>Nincs találat.</CommandEmpty>
                    <CommandGroup>
                      {recipes.map((recipe) => (
                        <CommandItem
                          key={recipe.id}
                          value={recipe.title}
                          onSelect={() => {
                            setSelectedRecipe(
                              recipe.id === selectedRecipe ? null : recipe.id,
                            );
                            setRecipeOpen(false);
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              'mr-2 size-4',
                              selectedRecipe === recipe.id
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {recipe.title}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Date picker */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium'>Dátum</label>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className='mr-2 size-4' />
                  {date
                    ? format(date, 'PPP', { locale: hu })
                    : 'Válassz dátumot…'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setDateOpen(false);
                  }}
                  locale={hu}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Meal select */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-medium'>Étkezés</label>
            <Select value={meal} onValueChange={setMeal}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Válassz étkezést…' />
              </SelectTrigger>
              <SelectContent>
                {MEAL_TIMES.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            className='mt-2 w-full'
            disabled={!selectedRecipe || !date || !meal}
          >
            Hozzáadás
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
