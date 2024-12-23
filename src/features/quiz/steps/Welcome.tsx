import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import { Layout } from '../../../components/Layout';
import { WelcomeStep } from '../../../data/stepTypes';
import { ButtonNext } from '../../../components/ButtonNext';

interface Props {
  data: WelcomeStep;
}

export const WelcomeScreen: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const goNext = () => {
    navigate(`/${data.pathNext}`);
  };

  return (
    <Layout
      header={data.content.header}
      backgroundImage={data.content.backgroundImage}
      buttonNext={<ButtonNext label={data.content.footer?.buttonNext} onNext={goNext} />}
    >
      <Typography variant="h6" align="center" dangerouslySetInnerHTML={{ __html: data.content.text }} />
    </Layout>
  );
};
