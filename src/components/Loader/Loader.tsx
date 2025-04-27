import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  size?: number;
  color?: string;
  loading: boolean;
}
export default function Loader({
  size = 30,
  color = "#36d7b7",
  loading,
}: LoaderProps) {
  return <ClipLoader size={size} color={color} loading={loading}></ClipLoader>;
}
