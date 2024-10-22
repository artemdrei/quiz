import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { WelcomeStep } from "../../data/stepTypes";

interface WelcomeScreenProps {
  content: WelcomeStep["content"];
  onNext: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  content,
  onNext,
}) => {
  return (
    <Layout
      header={content.header}
      footer={content.footer}
      backgroundImage={content.backgroundImage}
      onNext={onNext}
    >
      <Typography variant="h6" align="center">
        {content.text}
      </Typography>
    </Layout>
  );
};
