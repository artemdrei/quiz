import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, TextField } from '@mui/material';

import { Layout } from '../../../components/Layout';
import { BirthDateStep } from '../../../data/stepTypes';
import { ButtonNext } from '../../../components/ButtonNext';
import { useAnswersContext } from '../answersContext/useAnswerContext';

interface Props {
  data: BirthDateStep;
}

export const BirthDateScreen: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { setDateOfBirth } = useAnswersContext();

  const [value, setValue] = React.useState<string>('2001-01-01');

  useEffect(() => {
    setDateOfBirth(value);
  }, [value, setDateOfBirth]);

  const goNext = () => {
    navigate(`/${data.pathNext}`);
  };

  return (
    <Layout
      header={data.content.header}
      backgroundImage={data.content.backgroundImage}
      buttonNext={<ButtonNext label={data.content.footer?.buttonNext} onNext={goNext} />}
    >
      <Box>
        <Typography mb={'20px'} dangerouslySetInnerHTML={{ __html: data.content.question }} />
        <TextField
          label="Controlled field"
          type="date"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setDateOfBirth(event.target.value);
          }}
        />
      </Box>
    </Layout>
  );
};
