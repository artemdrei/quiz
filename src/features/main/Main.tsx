import { useEffect, useState } from 'react';
import { styled, Switch } from '@mui/material';

import config from '../../data/data.json';
import { Quiz } from '../quiz/Quiz';
import { prettifyJson } from '../../utils';
import { Quiz as QuizType } from '../../data/stepTypes';
import { Editor } from '../editor/Editor';

const AppContainerStyled = styled('div')`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const FlowContainerStyled = styled('div')`
  position: relative;
  width: 50%;
  height: 100%;
  transition: width 0.3s ease;
`;

const EditorContainerStyled = styled('div')`
  width: 50%;
  height: 100%;
  transition: width 0.3s ease;
  overflow: hidden;
`;

const SwitchWrapperStyled = styled('div')`
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = () => {
  const [data, setData] = useState('');
  const [editorMode, setEditorMode] = useState<'JSON' | 'UI'>('JSON');

  useEffect(() => {
    setData(prettifyJson(JSON.stringify(config)));
  }, []);

  const handleChange = (value: string | undefined) => {
    if (value) {
      setData(prettifyJson(value));
    }
  };

  const changeEditorMode = () => {
    setEditorMode(isJsonEditorMode ? 'UI' : 'JSON');
  };

  const isJsonEditorMode = editorMode === 'JSON';

  if (!data) return null;

  return (
    <AppContainerStyled>
      <FlowContainerStyled>
        <Quiz data={JSON.parse(data) as QuizType} />
        <SwitchWrapperStyled>
          JSON <Switch onChange={changeEditorMode} /> UI
        </SwitchWrapperStyled>
      </FlowContainerStyled>

      <EditorContainerStyled>
        {isJsonEditorMode && <Editor data={data} onChange={handleChange} />}
      </EditorContainerStyled>
    </AppContainerStyled>
  );
};
