import { jsonSchema } from './zodToJsonSchema';
import { RJSFSchema } from '@rjsf/utils';

export const getJsonSchemaByType = (type: string) => {
  return (jsonSchema.find((item: any) => item?.properties?.type?.const === type) as RJSFSchema) || null;
};
