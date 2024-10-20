import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../components/Layout";

import { ZodiacSignStep } from "../../data/stepTypes";

interface ZodiacSignScreenProps {
  zodiacSign: string;
  content: ZodiacSignStep["content"];
}

export const ZodiacSignScreen: React.FC<ZodiacSignScreenProps> = ({
  content,
  zodiacSign,
}) => {
  return (
    <Layout
      header={content.header}
      backgroundImage={content.backgroundImage}
      onNext={() => {}}
    >
      <Typography variant="h6" align="center">
        {content.text} {zodiacSign}
      </Typography>
    </Layout>
  );
};
