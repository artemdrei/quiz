import { useEffect, useState } from 'react';
import { styled } from '@mui/material';

import config from '../../data/data.json';
import { Quiz } from '../quiz/Quiz';
import { prettifyJson } from '../../utils';

const AppContainerStyled = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Main = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(prettifyJson(JSON.stringify(config)));
  }, []);

  if (!data) return null;

  return (
    <AppContainerStyled>
      <Quiz data={data} setData={setData} />
    </AppContainerStyled>
  );
};
