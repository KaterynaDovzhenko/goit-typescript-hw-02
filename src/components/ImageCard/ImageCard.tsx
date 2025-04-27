import css from "./ImageCard.module.css";
import { ImageData, OnImgClick } from "../../types/img";

interface ImgCardProps {
  item: ImageData;
  onImgClick: OnImgClick;
}

export default function ImageCard({ item, onImgClick }: ImgCardProps) {
  return (
    <img
      onClick={() =>
        onImgClick({ url: item.urls.full, alt: item.alt_description })
      }
      className={css.img}
      src={item.urls.small}
      alt={item.alt_description}
    />
  );
}
