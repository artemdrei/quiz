import React from 'react';
import { Typography } from '@mui/material';

import { Layout } from '../../components/Layout';
import { ZodiacSignStep } from '../../data/stepTypes';

interface Props {
  data: ZodiacSignStep;
}

export const ZodiacSignScreen: React.FC<Props> = ({ data }) => {
  return (
    <Layout header={data.content.header} backgroundImage={data.content.backgroundImage}>
      <Typography variant="h6" align="center">
        {data.content.text}
      </Typography>
    </Layout>
  );
};
