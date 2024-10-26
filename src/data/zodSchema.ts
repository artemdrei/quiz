import { z } from 'zod';
import { StepType } from './stepTypes';

const StepTypeEnum = z.nativeEnum(StepType);

const BackgroundImageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
});

const FooterSchema = z.object({
  buttonNext: z.string().optional(),
});

const BaseStepSchema = z.object({
  path: z.string(),
  pathNext: z.string(),
  type: StepTypeEnum,
});

export const WelcomeStepSchema = BaseStepSchema.extend({
  type: z.literal(StepType.WELCOME),
  content: z.object({
    header: z.string(),
    text: z.string(),
    backgroundImage: BackgroundImageSchema,
    footer: FooterSchema.optional(),
  }),
});

export const BirthDateStepSchema = BaseStepSchema.extend({
  type: z.literal(StepType.DATE),
  content: z.object({
    header: z.string(),
    question: z.string(),
    backgroundImage: BackgroundImageSchema,
    footer: FooterSchema.optional(),
  }),
});

export const ZodiacSignStepSchema = BaseStepSchema.extend({
  type: z.literal(StepType.ZODIAC_SIGN),
  content: z.object({
    header: z.string(),
    text: z.string(),
    backgroundImage: BackgroundImageSchema,
  }),
});

export const QuizSchema = z.object({
  steps: z.array(z.union([WelcomeStepSchema, BirthDateStepSchema, ZodiacSignStepSchema])),
});

export const QuizStepsSchema = [WelcomeStepSchema, BirthDateStepSchema, ZodiacSignStepSchema];
