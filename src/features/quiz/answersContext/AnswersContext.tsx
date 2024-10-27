import React, { createContext, useState, ReactNode } from 'react';

interface ContextType {
  dateOfBirth: string | null;
  setDateOfBirth: (date: string | null) => void;
}

export const AnswersContext = createContext<ContextType | undefined>(undefined);

export const AnswersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null);

  return (
    <AnswersContext.Provider value={{ dateOfBirth, setDateOfBirth }}>{children}</AnswersContext.Provider>
  );
};
