import React from "react";
import { Container, Box, Button, Typography, styled } from "@mui/material";

const WrapperStyled = styled(Box)<{ path?: string }>`
  background: url(${({ path }) => path});
  background-size: cover;
`;

interface LayoutProps {
  header: string;
  children: React.ReactNode;
  footer?: { buttonNext?: string };
  backgroundImage?: {
    src: string;
    alt: string;
  };
  onNext: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  children,
  backgroundImage,
  onNext,
}) => {
  return (
    <WrapperStyled path={backgroundImage?.src}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100vh"
        >
          <Typography variant="h5" mt={"20px"}>
            {header}
          </Typography>

          <Box
            flexGrow={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </Box>

          {footer?.buttonNext && (
            <Button
              fullWidth
              sx={{ marginBottom: "20px;" }}
              size="large"
              variant="contained"
              color="primary"
              onClick={onNext}
            >
              {footer?.buttonNext}
            </Button>
          )}
        </Box>
      </Container>
    </WrapperStyled>
  );
};

export default Layout;
