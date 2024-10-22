import { z } from "zod";

export enum StepType {
  DATE = "DATE",
  WELCOME = "WELCOME",
  ZODIAC_SIGN = "ZODIAC_SIGN",
}

import {
  QuizSchema,
  WelcomeStepSchema,
  BirthDateStepSchema,
  ZodiacSignStepSchema,
} from "./zodSchema";

export type Quiz = z.infer<typeof QuizSchema>;
export type WelcomeStep = z.infer<typeof WelcomeStepSchema>;
export type BirthDateStep = z.infer<typeof BirthDateStepSchema>;
export type ZodiacSignStep = z.infer<typeof ZodiacSignStepSchema>;
