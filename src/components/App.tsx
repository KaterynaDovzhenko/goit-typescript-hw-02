import SearchBar from "./SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "../ImagesSearch";
import ImageGallery from "./ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { ImageData } from "../types/img";

export default function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchImg, setSearchImg] = useState<string>("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<{ url: string; alt: string }>({
    url: "",
    alt: "",
  });

  const handleSearch = (value: string) => {
    setSearchImg(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleImgClick = ({ url, alt }: { url: string; alt: string }) => {
    setModalImg({ url, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (searchImg === "") {
      return;
    }
    async function getImg() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(searchImg, page);
        console.log("Fetched images:", data);
        setImages((prevState) => {
          return [...prevState, ...data];
        });
      } catch (error) {
        setError(true);
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getImg();
  }, [page, searchImg]);

  return (
    <div>
      <Toaster></Toaster>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {error && <ErrorMessage></ErrorMessage>}
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        images.length > 0 && (
          <ImageGallery
            items={images}
            onImgClick={handleImgClick}
          ></ImageGallery>
        )
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMoreClick}></LoadMoreBtn>
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imgUrl={modalImg.url}
        imgAlt={modalImg.alt}
      ></ImageModal>
    </div>
  );
}
