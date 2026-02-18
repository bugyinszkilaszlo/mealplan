import * as React from 'react';
import { Label } from '../label';
import { cn } from '@/lib/utils';

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Field({
  label,
  htmlFor,
  required = false,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn('flex flex-col mb-5', className)}>
      <Label htmlFor={htmlFor} className='mb-1'>
        {label} {required && '*'}
      </Label>
      {children}
    </div>
  );
}
