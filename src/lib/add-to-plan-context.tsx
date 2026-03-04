'use client';

import * as React from 'react';

interface AddToPlanContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const AddToPlanContext = React.createContext<AddToPlanContextValue>({
  open: false,
  setOpen: () => {},
});

export function AddToPlanProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <AddToPlanContext.Provider value={{ open, setOpen }}>
      {children}
    </AddToPlanContext.Provider>
  );
}

export function useAddToPlan() {
  return React.useContext(AddToPlanContext);
}
