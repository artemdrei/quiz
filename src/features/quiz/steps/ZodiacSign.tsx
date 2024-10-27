import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { Layout } from '../../../components/Layout';
import { ZodiacSignStep } from '../../../data/stepTypes';
import { getZodiacSign } from '../../../utils';
import { useAnswersContext } from '../answersContext/useAnswerContext';

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
  const { dateOfBirth } = useAnswersContext();

  const date = dayjs(dateOfBirth);
  const month = date.month() + 1; // human first month starts from 1 not from 0
  const day = date.day();

  if (!month || !day)
    return (
      <Layout header={data.content.header} backgroundImage={data.content.backgroundImage}>
        <TitleStyled>Select date on the previous step</TitleStyled>
      </Layout>
    );

  const zodiacSign = getZodiacSign({ month, day });

  return (
    <Layout header={data.content.header} backgroundImage={data.content.backgroundImage}>
      <Box flexDirection="column">
        <ZodiacSignStyled variant="h1" textAlign="center">
          {zodiacSign.emoji}
        </ZodiacSignStyled>

        <Box>
          <TitleStyled>
            <span dangerouslySetInnerHTML={{ __html: data.content.text }} />
            <b>{zodiacSign.name}</b>
          </TitleStyled>
          <DescriptionStyled dangerouslySetInnerHTML={{ __html: zodiacSign.description }} />
        </Box>
      </Box>
    </Layout>
  );
};
