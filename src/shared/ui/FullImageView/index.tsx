import { styled } from "@mui/material";
import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
}

export const FullImageView: React.FC<Props> = ({ src, width, height }) => {
  const [active, setActive] = React.useState(false);
  function replaceUrl(imageUrl: string | null | undefined): string {
    const oldUrlPart = "http://";
    const newUrlPart = "http://ec2-54-173-142-201.compute-1.amazonaws.com/";

    if (typeof imageUrl === "string" && imageUrl.includes(oldUrlPart)) {
      return imageUrl.replace(oldUrlPart, newUrlPart);
    }

    return imageUrl || "";
  }
  src = replaceUrl(src);
  return (
    <>
      <ImageBlcok width={width} height={height}>
        <Image src={src} alt="image" onClick={() => setActive(!active)} />
      </ImageBlcok>
      {active && (
        <ImageControl onClick={() => setActive(!active)}>
          <div>
            <Image src={src} alt="image" />
          </div>
        </ImageControl>
      )}
    </>
  );
};

const ImageControl = styled("div")({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1000,

  "& > div": {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  img: {
    width: "600px",
    height: "100%",
  },
});
const ImageBlcok = styled("div")<{ width: number; height: number }>(({ width, height }) => ({
  width: width,
  height: height,
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
