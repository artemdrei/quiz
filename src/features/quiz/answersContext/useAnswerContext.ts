import { useContext } from 'react';
import { AnswersContext } from './AnswersContext';

export const useAnswersContext = () => {
  const context = useContext(AnswersContext);

  if (context === undefined) {
    throw new Error('useAnswersContext must be used within a AnswersProvider');
  }

  return context;
};
