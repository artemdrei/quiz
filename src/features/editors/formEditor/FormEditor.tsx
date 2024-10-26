import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material';
import { Theme } from '@rjsf/mui';
import { withTheme } from '@rjsf/core';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

import { Quiz } from '../../../data/stepTypes';
import { uiSchema } from './utils/uiSchema';
import { getJsonSchemaByType } from './utils/getJsonSchemaByType';

const Form = withTheme(Theme);

const FormStyled = styled(Form)`
  height: calc(100vh - 70px);
  overflow: auto;
  padding: 20px;
`;

interface Props {
  data: string;
  onChange: (data: string) => void;
}

export const FormEditor: React.FC<Props> = ({ data, onChange }) => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const quiz = JSON.parse(data) as Quiz;
  const currentStepData = quiz.steps.find((step) => step.path === path);
  const currentStepSchema = getJsonSchemaByType(currentStepData?.type || '');

  if (!currentStepData || !currentStepSchema) return null;

  const handleChange = (value: IChangeEvent) => {
    const updatedStepData = value.formData;

    const steps = quiz.steps.map((step) => {
      if (step.type === updatedStepData.type) {
        return updatedStepData;
      }

      return step;
    });

    onChange(JSON.stringify({ steps }));
  };

  return (
    <FormStyled
      liveValidate
      schema={currentStepSchema}
      uiSchema={uiSchema}
      formData={currentStepData}
      validator={validator}
      onChange={handleChange}
    />
  );
};
