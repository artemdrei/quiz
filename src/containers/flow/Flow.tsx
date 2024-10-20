import React, { useState } from "react";
import { WelcomeScreen } from "../steps/Welcome";
import { BirthDateScreen } from "../steps/BirthDate";
import { ZodiacSignScreen } from "../steps/ZodiacSign";
import quizData from "../../data/data.json";
import {
  WelcomeStep,
  BirthDateStep,
  ZodiacSignStep,
} from "../../data/stepTypes";

export const Flow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [zodiacSign, setZodiacSign] = useState("");

  const handleDateSubmit = (date: string) => {
    const zodiac = calculateZodiacSign(date);
    setZodiacSign(zodiac);
    setStep(3);
  };

  const calculateZodiacSign = (date: string): string => {
    const birthDate = new Date(date);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "Aries";
    }
    return "Unknown";
  };

  const currentStep = quizData.steps.find((s) => s.id === step);

  if (!currentStep) {
    return <div>Error: Step not found</div>;
  }

  return (
    <div>
      {step === 1 && (
        <WelcomeScreen
          content={currentStep.content as WelcomeStep["content"]}
          onNext={() => setStep(currentStep.next || 2)}
        />
      )}
      {step === 2 && (
        <BirthDateScreen
          content={currentStep.content as BirthDateStep["content"]}
          onDateSubmit={handleDateSubmit}
        />
      )}
      {step === 3 && (
        <ZodiacSignScreen
          zodiacSign={zodiacSign}
          content={currentStep.content as ZodiacSignStep["content"]}
        />
      )}
    </div>
  );
};
