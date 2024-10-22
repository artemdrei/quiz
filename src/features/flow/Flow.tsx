import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import { WelcomeScreen } from '../steps/Welcome';
import { BirthDateScreen } from '../steps/BirthDate';
import { ZodiacSignScreen } from '../steps/ZodiacSign';
import quizData from '../../data/data.json';
import { WelcomeStep, BirthDateStep, ZodiacSignStep } from '../../data/stepTypes';

export const Flow: React.FC = () => {
  const routes = quizData.steps.map((step) => {
    if (step.type === 'ONBOARDING') {
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

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};