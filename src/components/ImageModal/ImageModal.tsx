import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IImage } from "../../App";

const customStyles = {
  content: {
    padding: "0",
    background: "unset",
    overflow: "unset",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface IImageModalProps {
  image: IImage | null; // Adjusted to handle IImage or null
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<IImageModalProps> = ({
  image,
  isOpen,
  onRequestClose,
}) => {
  if (!image) {
    return null;
  }
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.imageModal}
        overlayClassName={css.overlay}
        contentLabel="Image Modal"
        appElement={document.getElementById("root") as HTMLElement}
      >
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
