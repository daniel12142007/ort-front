import styled from "@emotion/styled";

export const LoadContainer = styled.div<{ load: boolean }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  height: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.2s;

  ${({ load }) => (load ? "left: 0" : "right: 0")};
  width: ${({ load }) => (load ? "100%" : "0")};
`;

export const Loader = styled.div<{ label: string }>`
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 50px;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
  color: #eee;

  &:before {
    content: "${({ label }) => label}...";
    clip-path: inset(0 1ch 0 0);
    animation: l4 1s steps(4) infinite;
  }

  @keyframes l4 {
    to {
      clip-path: inset(0 -1ch 0 0);
    }
  }
`;
