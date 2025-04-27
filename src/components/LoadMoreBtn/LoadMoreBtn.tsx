import { JSX } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({
  onClick,
}: LoadMoreBtnProps): JSX.Element {
  return <button onClick={onClick}>load more</button>;
}
