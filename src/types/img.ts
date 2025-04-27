export interface ImageData {
  id?: number;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

export interface OnImgClick {
  (image: { url: string; alt: string }): void;
}
