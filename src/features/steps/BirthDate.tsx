import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Typography } from "@mui/material";

import { Layout } from "../../components/Layout";
import { BirthDateStep } from "../../data/stepTypes";
import { ButtonNext } from "../../components/ButtonNext";

interface Props {
  data: BirthDateStep;
}

export const BirthDateScreen: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState("");

  return (
    <Layout
      header={data.content.header}
      backgroundImage={data.content.backgroundImage}
      buttonNext={
        <ButtonNext
          label={data.content.footer?.buttonNext}
          onNext={() => navigate(`/${data.pathNext}`)}
        />
      }
    >
      <Box sx={{ width: "100%" }}>
        <Typography mb={"12px"}>{data.content.question}</Typography>
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
