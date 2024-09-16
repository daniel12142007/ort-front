import { LoadContainer, Loader } from "./style";

interface Props {
  load: boolean;
  label: string;
}

export const LoaderPopup: React.FC<Props> = ({ load, label }) => {
  return <LoadContainer load={load}>{load && <Loader label={label} />}</LoadContainer>;
};
