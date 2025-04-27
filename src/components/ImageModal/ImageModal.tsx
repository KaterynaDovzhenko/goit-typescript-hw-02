import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
  imgAlt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imgUrl,
  imgAlt,
}: ImageModalProps) {
  useEffect(() => {
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
      <div className={css.modalContent}>
        <img src={imgUrl} alt={imgAlt} className={css.modalImage} />
      </div>
    </Modal>
  );
}
