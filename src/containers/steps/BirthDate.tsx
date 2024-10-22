import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { BirthDateStep } from "../../data/stepTypes";

interface BirthDateScreenProps {
  content: BirthDateStep["content"];
  onDateSubmit: (date: string) => void;
}

export const BirthDateScreen: React.FC<BirthDateScreenProps> = ({
  content,
  onDateSubmit,
}) => {
  const [date, setDate] = useState("");

  return (
    <Layout
      header={content.header}
      footer={content.footer}
      backgroundImage={content.backgroundImage}
      onNext={() => onDateSubmit(date)}
    >
      <Box sx={{ width: "100%" }}>
        <Typography mb={"12px"}>{content.question}</Typography>
        <TextField
          fullWidth
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Box>
    </Layout>
  );
};
