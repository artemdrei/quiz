import { QuizSchema } from "./zodSchema";
import quizData from "./data.json";

export const validatedData = QuizSchema.parse(quizData);
