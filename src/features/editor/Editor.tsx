import { Editor as MonacoEditor, EditorProps } from '@monaco-editor/react';

interface Props {
  data: string;
  onChange: EditorProps['onChange'];
}

export const Editor: React.FC<Props> = ({ data, onChange }) => {
  return (
    <MonacoEditor
      height="100%"
      width="100%"
      theme="vs-dark"
      defaultLanguage="json"
      defaultValue={data}
      onChange={onChange}
    />
  );
};
