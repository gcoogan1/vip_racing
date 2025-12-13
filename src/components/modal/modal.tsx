import { useEffect, useRef } from "react";
import CloseButton from "../closeButton/closeButton";
import { ModalOverlay, ModalContent } from "./modal.styles"

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {


const modalRef = useRef<HTMLDivElement | null>(null);


// Scroll to modal when it opens
useEffect(() => {
  if (modalRef.current) {
    const y = modalRef.current.getBoundingClientRect().top + window.scrollY - 40; 
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}, []);



  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal