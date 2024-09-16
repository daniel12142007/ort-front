import { styled } from "@mui/material";
import React from "react";

interface Props {
  src: string;
  width: number;
  height: number;
}

const index: React.FC<Props> = ({ src, width, height }) => {
  const [active, setActive] = React.useState(false);
  function replaceUrl(imageUrl: string | null | undefined): string {
    const oldUrlPart = "http://192.168.68.105:8080";
    const newUrlPart = "http://192.168.68.107:8080";

    if (typeof imageUrl === "string" && imageUrl.includes(oldUrlPart)) {
      return imageUrl.replace(oldUrlPart, newUrlPart);
    }

    return imageUrl || "";
  }
  src = replaceUrl(src);
  return (
    <>
      <ImageBlcok width={width} height={height}>
        <Image src={src} alt="full" onClick={() => setActive(!active)} />
      </ImageBlcok>
      {active && (
        <ImageControl onClick={() => setActive(!active)}>
          <div>
            <Image src={src} alt="full" />
          </div>
        </ImageControl>
      )}
    </>
  );
};

export default index;

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
