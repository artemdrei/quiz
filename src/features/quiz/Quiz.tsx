import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { WelcomeScreen } from './steps/Welcome';
import { BirthDateScreen } from './steps/BirthDate';
import { ZodiacSignScreen } from './steps/ZodiacSign';
import { WelcomeStep, BirthDateStep, ZodiacSignStep, Quiz as QuizType } from '../../data/stepTypes';
import { EditorsContainer } from '../editors/editorsContainer/EditorsContainer';
import { AnswersProvider } from './answersContext/AnswersContext';

interface Props {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export const Quiz: React.FC<Props> = ({ data, setData }) => {
  const parsedData = JSON.parse(data) as QuizType;

  const dynamicRoutes = parsedData.steps?.map((step) => {
    switch (step.type) {
      case 'WELCOME':
        return (
          <Route key={step.path} path={step.path} element={<WelcomeScreen data={step as WelcomeStep} />} />
        );
      case 'DATE':
        return (
          <Route
            key={step.path}
            path={step.path}
            element={<BirthDateScreen data={step as BirthDateStep} />}
          />
        );
      case 'ZODIAC_SIGN':
        return (
          <Route
            key={step.path}
            path={step.path}
            element={<ZodiacSignScreen data={step as ZodiacSignStep} />}
          />
        );
      default:
        return <Navigate replace to="/" />;
    }
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <AnswersProvider>
            <EditorsContainer data={data} setData={setData} />
          </AnswersProvider>
        }
      >
        {dynamicRoutes}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Route>,
    ),
    { basename: import.meta.env.BASE_URL },
  );

  return <RouterProvider router={router} />;
};
