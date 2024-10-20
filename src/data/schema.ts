import { z } from "zod";

const BaseStepSchema = z.object({
  id: z.number(),
  path: z.string(),
  next: z.number().nullable(),
  type: z.enum(["ONBOARDING", "DATE", "ZODIAC_SIGN"]),
});

const OnboardingStepSchema = BaseStepSchema.extend({
  type: z.literal("text"),
  content: z.string(),
});

const DateStepSchema = BaseStepSchema.extend({
  type: z.literal("input"),
  question: z.string(),
});

const ResultStepSchema = BaseStepSchema.extend({
  type: z.literal("result"),
  message: z.string(),
});

const QuizSchema = z.object({
  steps: z.array(
    z.union([OnboardingStepSchema, DateStepSchema, ResultStepSchema])
  ),
});

import quizData from "./data.json";

const validatedData = QuizSchema.parse(quizData);
