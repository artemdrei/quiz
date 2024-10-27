import React from 'react';
import { Button, styled } from '@mui/material';

const ButtonStyled = styled(Button)`
  margin-bottom: 20px;
`;

interface Props {
  label?: string;
  className?: string;
  onNext: () => void;
}

export const ButtonNext: React.FC<Props> = ({ label, className, onNext }) => {
  return (
    <ButtonStyled
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      className={className}
      onClick={onNext}
    >
      {label || 'Next'}
    </ButtonStyled>
  );
};
