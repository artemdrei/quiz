import React, { ReactNode } from 'react';
import { Container, Box, Typography, styled } from '@mui/material';

const WrapperStyled = styled(Box)<{ path?: string }>`
  background: url(${({ path }) => path});
  background-size: cover;
`;

const TitleStyled = styled(Typography)`
  margin-top: 20px;
`;

interface LayoutProps {
  header: string;
  children: React.ReactNode;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  buttonNext?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ header, children, buttonNext, backgroundImage }) => {
  return (
    <WrapperStyled path={backgroundImage?.src}>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
          {header && (
            <TitleStyled
              variant="h4"
              color="textSecondary"
              textAlign="center"
              dangerouslySetInnerHTML={{ __html: header }}
            />
          )}

          <Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">
            {children}
          </Box>

          {buttonNext}
        </Box>
      </Container>
    </WrapperStyled>
  );
};
