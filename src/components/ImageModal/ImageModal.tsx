import Modal from "react-modal";

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  urls: string;
  alt_description?: string;
}

const customStyles: {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
  };
  overlay: {
    backgroundColor: string;
  };
} = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};

Modal.setAppElement("#modal-root");

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  urls,
  alt_description,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Image Modal"
  >
    <img src={urls} alt={alt_description || "Image"} />
  </Modal>
);

export default ImageModal;
