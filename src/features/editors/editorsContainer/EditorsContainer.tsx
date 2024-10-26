import { styled, Switch } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { JsonEditor } from '../jsonEditor/JsonEditor';
import { FormEditor } from '../formEditor/FormEditor';
import { useState } from 'react';
import { prettifyJson } from '../../../utils';
import { ErrorBoundary } from 'react-error-boundary';

const WrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LeftPanelStyled = styled('div')`
  width: 50%;
  height: 100vh;
`;

const RightPanelStyled = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

const EditorContainerStyled = styled('div')`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SwitchWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) => theme.palette.grey[500]};
  padding: 8px 12px;
`;

interface Props {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export const EditorsContainer: React.FC<Props> = ({ data, setData }) => {
  const [editorMode, setEditorMode] = useState<'JSON' | 'UI'>('UI');

  const handleChangeData = (value: string | undefined) => {
    if (value) {
      setData(prettifyJson(value));
    }
  };

  const handleToggleEditorMode = () => {
    setEditorMode(isJsonEditorMode ? 'UI' : 'JSON');
  };

  const isJsonEditorMode = editorMode === 'JSON';

  return (
    <WrapperStyled>
      <LeftPanelStyled>
        <Outlet />
      </LeftPanelStyled>

      <RightPanelStyled>
        <SwitchWrapperStyled>
          JSON <Switch onChange={handleToggleEditorMode} /> UI
        </SwitchWrapperStyled>

        <ErrorBoundary fallback="Something went wrong">
          <EditorContainerStyled>
            {isJsonEditorMode ? (
              <JsonEditor data={data} onChange={handleChangeData} />
            ) : (
              <FormEditor data={data} onChange={handleChangeData} />
            )}
          </EditorContainerStyled>
        </ErrorBoundary>
      </RightPanelStyled>
    </WrapperStyled>
  );
};
