'use client';

import { Button } from '@/components/ui/button';
import { useAddToPlan } from '@/lib/add-to-plan-context';

export default function AddToPlanButton({ className }: { className?: string }) {
  const { setOpen } = useAddToPlan();
  return (
    <Button className={className} onClick={() => setOpen(true)}>
      Hozzáadás
    </Button>
  );
}
