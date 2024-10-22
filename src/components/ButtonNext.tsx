import React from "react";
import { Button } from "@mui/material";

interface Props {
  label?: string;
  className?: string;
  onNext: () => void;
}

export const ButtonNext: React.FC<Props> = ({ label, className, onNext }) => {
  return (
    <Button
      fullWidth
      sx={{ marginBottom: "20px;" }}
      size="large"
      variant="contained"
      color="primary"
      className={className}
      onClick={onNext}
    >
      {label || "Next"}
    </Button>
  );
};
