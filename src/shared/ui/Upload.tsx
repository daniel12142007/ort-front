import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Props {
  setFile: (file: File | null) => void;
}

export const UploadUI: React.FC<Props> = ({ setFile }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };
  return (
    <Button
      sx={{
        backgroundColor: "#f0f0f0",
        color: "#000000",
        boxShadow: "none",
        width: "130px",
        height: "80px",
        padding: "10px 20px",
        textAlign: "center",

        "&:hover": {
          backgroundColor: "#d9d9d9",
        },
      }}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Загрузить файл
      <VisuallyHiddenInput type="file" onChange={handleChange} multiple />
    </Button>
  );
};
