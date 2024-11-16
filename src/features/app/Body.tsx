import { useEffect, useState } from 'react';
import { styled } from '@mui/material';

import config from '../../data/data.json';
import { Quiz } from '../quiz/Quiz';
import { prettifyJson } from '../../utils';

const BodyStyled = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Body = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(prettifyJson(JSON.stringify(config)));
  }, []);

  if (!data) return null;

  return (
    <BodyStyled>
      <Quiz data={data} setData={setData} />
    </BodyStyled>
  );
};
