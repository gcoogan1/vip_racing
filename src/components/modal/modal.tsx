import CloseButton from "../closeButton/closeButton";
import { ModalOverlay, ModalContent } from "./modal.styles"

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal