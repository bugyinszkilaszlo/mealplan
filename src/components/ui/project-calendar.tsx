'use client';

import { getDay, getDaysInMonth, isSameDay } from 'date-fns';
import { atom, useAtom } from 'jotai';
import Link from 'next/link';
import {
  Check,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDown,
} from 'lucide-react';
import {
  createContext,
  memo,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export type CalendarState = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  year: number;
};

const monthAtom = atom<CalendarState['month']>(
  new Date().getMonth() as CalendarState['month'],
);
const yearAtom = atom<CalendarState['year']>(new Date().getFullYear());

export const useCalendarMonth = () => useAtom(monthAtom);
export const useCalendarYear = () => useAtom(yearAtom);

type CalendarContextProps = {
  locale: Intl.LocalesArgument;
  startDay: number;
};

const CalendarContext = createContext<CalendarContextProps>({
  locale: 'en-US',
  startDay: 0,
});

export type MealTime = {
  id: string;
  name: string;
  color: string;
};

export type Feature = {
  id: string;
  name: string;
  date: Date;
  mealTime: MealTime;
  url: string;
};

type ComboboxProps = {
  value: string;
  setValue: (value: string) => void;
  data: {
    value: string;
    label: string;
  }[];
  labels: {
    button: string;
    empty: string;
    search: string;
  };
  className?: string;
};

export const monthsForLocale = (
  locale: Intl.LocalesArgument,
): readonly string[] => {
  const format = new Intl.DateTimeFormat(locale, { month: 'long' });
  return Array.from({ length: 12 }, (_, i) =>
    format.format(new Date(2024, i, 1)),
  );
};

export const daysForLocale = (
  locale: Intl.LocalesArgument,
  startDay = 0,
): readonly string[] => {
  const format = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  // Use a date that is known to be a Sunday (Jan 7, 2024)
  const days = Array.from({ length: 7 }, (_, i) =>
    format.format(new Date(2024, 0, 7 + i)),
  );
  return [...days.slice(startDay), ...days.slice(0, startDay)];
};

const Combobox = ({
  value,
  setValue,
  data,
  labels,
  className,
}: ComboboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          aria-label={labels.button}
          className={cn('justify-between', className)}
          role='combobox'
          size='sm'
          variant='outline'
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : labels.button}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-50 p-0'>
        <Command>
          <CommandInput placeholder={labels.search} />
          <CommandList>
            <CommandEmpty>{labels.empty}</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                  value={item.value}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

type OutOfBoundsDayProps = {
  day: number;
};

const OutOfBoundsDay = ({ day }: OutOfBoundsDayProps) => (
  <div className='relative h-full w-full bg-secondary p-1 text-muted-foreground text-xs'>
    {day}
  </div>
);

export type CalendarBodyProps = {
  features: Feature[];
  children: (props: { feature: Feature }) => ReactNode;
};

export const CalendarBody = ({ features, children }: CalendarBodyProps) => {
  const [month] = useCalendarMonth();
  const [year] = useCalendarYear();
  const { startDay } = useContext(CalendarContext);

  const currentMonthDate = useMemo(
    () => new Date(year, month, 1),
    [year, month],
  );
  const daysInMonth = useMemo(
    () => getDaysInMonth(currentMonthDate),
    [currentMonthDate],
  );
  const firstDay = useMemo(
    () => (getDay(currentMonthDate) - startDay + 7) % 7,
    [currentMonthDate, startDay],
  );

  const prevMonthData = useMemo(() => {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const prevMonthDays = getDaysInMonth(new Date(prevMonthYear, prevMonth, 1));
    const prevMonthDaysArray = Array.from(
      { length: prevMonthDays },
      (_, i) => i + 1,
    );
    return prevMonthDaysArray.slice(-firstDay);
  }, [firstDay, month, year]);

  const totalCells = Math.ceil((prevMonthData.length + daysInMonth) / 7) * 7;
  const nextMonthDays = totalCells - (prevMonthData.length + daysInMonth);

  const featuresByDay = useMemo(() => {
    const dayMap = new Map<number, Feature[]>();

    for (const feature of features) {
      const featureDate = new Date(feature.date);
      if (
        featureDate.getMonth() === month &&
        featureDate.getFullYear() === year
      ) {
        const day = featureDate.getDate();
        if (!dayMap.has(day)) {
          dayMap.set(day, []);
        }
        dayMap.get(day)?.push(feature);
      }
    }

    return dayMap;
  }, [features, month, year]);

  const rowsWithContent = useMemo(() => {
    const totalCells = prevMonthData.length + daysInMonth + nextMonthDays;
    const rows = new Set<number>();

    // Check current month days for content
    Array.from({ length: daysInMonth }, (_, i) => i + 1).forEach((day) => {
      if (featuresByDay.has(day) && featuresByDay.get(day)!.length > 0) {
        const cellIndex = prevMonthData.length + day - 1;
        const row = Math.floor(cellIndex / 7);
        rows.add(row);
      }
    });

    return rows;
  }, [prevMonthData.length, daysInMonth, nextMonthDays, featuresByDay]);

  const getCellRowIndex = (cellIndex: number) => Math.floor(cellIndex / 7);
  const hasRowContent = (cellIndex: number) =>
    rowsWithContent.has(getCellRowIndex(cellIndex));

  return (
    <div className='grid grow auto-rows-auto grid-cols-7 border-l border-t'>
      {prevMonthData.map((day, index) => (
        <div
          className={cn(
            'relative border-b border-r bg-secondary/30',
            !hasRowContent(index) && 'aspect-square',
          )}
          key={`prev-${index}`}
        >
          <OutOfBoundsDay day={day} />
        </div>
      ))}

      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
        const dayFeatures = featuresByDay.get(day) || [];
        const isToday = isSameDay(new Date(year, month, day), new Date());
        const cellIndex = prevMonthData.length + day - 1;

        const featuresByMealTime = new Map<string, Feature[]>();
        for (const feature of dayFeatures) {
          const mealTimeId = feature.mealTime.id;
          if (!featuresByMealTime.has(mealTimeId)) {
            featuresByMealTime.set(mealTimeId, []);
          }
          featuresByMealTime.get(mealTimeId)?.push(feature);
        }

        return (
          <div
            className={cn(
              'relative border-b border-r bg-background p-1',
              !hasRowContent(cellIndex) && 'aspect-square',
            )}
            key={day}
          >
            <div
              className={cn(
                'mb-1 w-fit rounded px-1.5 py-0.5 text-xs font-medium',
                isToday && 'bg-primary text-primary-foreground',
              )}
            >
              {day}
            </div>
            <div className='space-y-2'>
              {Array.from(featuresByMealTime.entries()).map(
                ([mealTimeId, features]) => (
                  <div key={mealTimeId}>
                    <div className='text-muted-foreground text-[10px]'>
                      {features[0].mealTime.name}
                    </div>
                    {features.map((feature) => children({ feature }))}
                  </div>
                ),
              )}
            </div>
            <Button className='mt-2 w-full' size='sm' variant='secondary'>
              Hozzáad
            </Button>
          </div>
        );
      })}

      {Array.from({ length: nextMonthDays }, (_, i) => i + 1).map(
        (day, index) => {
          const cellIndex = prevMonthData.length + daysInMonth + index;
          return (
            <div
              className={cn(
                'relative border-b border-r bg-secondary/30',
                !hasRowContent(cellIndex) && 'aspect-square',
              )}
              key={`next-${day}`}
            >
              <OutOfBoundsDay day={day} />
            </div>
          );
        },
      )}
    </div>
  );
};

export type CalendarDatePickerProps = {
  className?: string;
  children: ReactNode;
};

export const CalendarDatePicker = ({
  className,
  children,
}: CalendarDatePickerProps) => (
  <div className={cn('flex items-center gap-1', className)}>{children}</div>
);

export type CalendarMonthPickerProps = {
  className?: string;
};

export const CalendarMonthPicker = ({
  className,
}: CalendarMonthPickerProps) => {
  const [month, setMonth] = useCalendarMonth();
  const { locale } = useContext(CalendarContext);

  const monthData = useMemo(() => {
    return monthsForLocale(locale).map((month, index) => ({
      value: index.toString(),
      label: month,
    }));
  }, [locale]);

  return (
    <Combobox
      className={className}
      data={monthData}
      labels={{
        button: 'Select month',
        empty: 'No month found',
        search: 'Search month',
      }}
      setValue={(value) =>
        setMonth(Number.parseInt(value, 10) as CalendarState['month'])
      }
      value={month.toString()}
    />
  );
};

export type CalendarYearPickerProps = {
  className?: string;
  start: number;
  end: number;
};

export const CalendarYearPicker = ({
  className,
  start,
  end,
}: CalendarYearPickerProps) => {
  const [year, setYear] = useCalendarYear();

  return (
    <Combobox
      className={className}
      data={Array.from({ length: end - start + 1 }, (_, i) => ({
        value: (start + i).toString(),
        label: (start + i).toString(),
      }))}
      labels={{
        button: 'Select year',
        empty: 'No year found',
        search: 'Search year',
      }}
      setValue={(value) => setYear(Number.parseInt(value, 10))}
      value={year.toString()}
    />
  );
};

export type CalendarDatePaginationProps = {
  className?: string;
};

export const CalendarDatePagination = ({
  className,
}: CalendarDatePaginationProps) => {
  const [month, setMonth] = useCalendarMonth();
  const [year, setYear] = useCalendarYear();

  const handlePreviousMonth = useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth((month - 1) as CalendarState['month']);
    }
  }, [month, year, setMonth, setYear]);

  const handleNextMonth = useCallback(() => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth((month + 1) as CalendarState['month']);
    }
  }, [month, year, setMonth, setYear]);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button onClick={handlePreviousMonth} size='icon' variant='ghost'>
        <ChevronLeftIcon size={16} />
      </Button>
      <Button onClick={handleNextMonth} size='icon' variant='ghost'>
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  );
};

export type CalendarDateProps = {
  children: ReactNode;
};

export const CalendarDate = ({ children }: CalendarDateProps) => (
  <div className='flex items-center justify-between p-3'>{children}</div>
);

export type CalendarHeaderProps = {
  className?: string;
};

export const CalendarHeader = ({ className }: CalendarHeaderProps) => {
  const { locale, startDay } = useContext(CalendarContext);

  const daysData = useMemo(() => {
    return daysForLocale(locale, startDay);
  }, [locale, startDay]);

  return (
    <div className={cn('grid grow grid-cols-7 border-l border-t', className)}>
      {daysData.map((day) => (
        <div
          className='border-b border-r bg-muted/50 p-3 text-center text-muted-foreground text-xs font-medium uppercase'
          key={day}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export type CalendarItemProps = {
  feature: Feature;
  className?: string;
};

export const CalendarItem = memo(
  ({ feature, className }: CalendarItemProps) => (
    <Link
      href={feature.url}
      className={cn(
        'flex items-center gap-2 rounded-md px-2 py-1 text-xs truncate',
        className,
      )}
      style={{
        backgroundColor: `${feature.mealTime.color}20`,
        borderLeft: `3px solid ${feature.mealTime.color}`,
      }}
    >
      <span className='truncate'>{feature.name}</span>
    </Link>
  ),
);

CalendarItem.displayName = 'CalendarItem';

export type CalendarProviderProps = {
  locale?: Intl.LocalesArgument;
  startDay?: number;
  children: ReactNode;
  className?: string;
};

export const CalendarProvider = ({
  locale = 'en-US',
  startDay = 0,
  children,
  className,
}: CalendarProviderProps) => (
  <CalendarContext.Provider value={{ locale, startDay }}>
    <div
      className={cn(
        'relative flex flex-col rounded-lg border bg-card shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  </CalendarContext.Provider>
);
