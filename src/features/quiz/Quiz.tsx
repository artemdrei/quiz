import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject, Navigate } from 'react-router-dom';

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

  const routes = parsedData.steps.map((step) => {
    if (step.type === 'WELCOME') {
      return {
        path: step.path,
        element: <WelcomeScreen data={step as WelcomeStep} />,
      };
    }

    if (step.type === 'DATE') {
      return {
        path: step.path,
        element: <BirthDateScreen data={step as BirthDateStep} />,
      };
    }

    if (step.type === 'ZODIAC_SIGN') {
      return {
        path: step.path,
        element: <ZodiacSignScreen data={step as ZodiacSignStep} />,
      };
    }

    return {
      path: '*',
      element: <WelcomeScreen data={step as WelcomeStep} />,
    };
  }) satisfies RouteObject[];

  routes.push({
    path: '*',
    element: <Navigate to="/welcome" replace />,
  });

  const allRouts = [
    {
      path: '/',
      element: (
        <AnswersProvider>
          <EditorsContainer data={data} setData={setData} />
        </AnswersProvider>
      ),
      children: routes,
    },
  ];

  const router = createBrowserRouter(allRouts);

  return <RouterProvider router={router}></RouterProvider>;
};
