import { ImageData, OnImgClick } from "../../types/img";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: ImageData[];
  onImgClick: OnImgClick;
}

export default function ImageGallery({ items, onImgClick }: ImageGalleryProps) {
  return (
    <ul className={css.img_gallery}>
      {items.map((item) => {
        return (
          <li className={css.img_gallery_item} key={item.id}>
            <div>
              <ImageCard item={item} onImgClick={onImgClick} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
