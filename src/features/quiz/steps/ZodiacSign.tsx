import React from 'react';
import { styled, Typography } from '@mui/material';

import { Layout } from '../../../components/Layout';
import { ZodiacSignStep } from '../../../data/stepTypes';
import { getZodiacSign } from '../../../utils';

const ZodiacSignStyled = styled(Typography)`
  margin-bottom: 32px;
  color: #fff;
`;

const TitleStyled = styled(Typography)`
  margin-bottom: 20px;
  color: #fff;
`;

const DescriptionStyled = styled(Typography)`
  margin-bottom: 20px;
  color: #fff;
`;

interface Props {
  data: ZodiacSignStep;
}

export const ZodiacSignScreen: React.FC<Props> = ({ data }) => {
  const zodiacSign = getZodiacSign({ month: 1, day: 20 });

  return (
    <Layout header={data.content.header} backgroundImage={data.content.backgroundImage}>
      <Typography variant="h6" align="center">
        <ZodiacSignStyled variant="h1">{zodiacSign.emoji}</ZodiacSignStyled>
        <TitleStyled>
          <span dangerouslySetInnerHTML={{ __html: data.content.text }} />
          <b>{zodiacSign.name}</b>
        </TitleStyled>
        <DescriptionStyled dangerouslySetInnerHTML={{ __html: zodiacSign.description }} />
      </Typography>
    </Layout>
  );
};
