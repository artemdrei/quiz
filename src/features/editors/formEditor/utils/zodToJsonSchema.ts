import { zodToJsonSchema } from 'zod-to-json-schema';
import { QuizStepsSchema } from '../../../../data/zodSchema';

export const jsonSchema = QuizStepsSchema.map((item) => zodToJsonSchema(item));
