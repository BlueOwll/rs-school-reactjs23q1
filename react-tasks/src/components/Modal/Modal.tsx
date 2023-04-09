import { MouseEventHandler, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

interface IModalProps {
  onClick: () => void;
}

const Modal: React.FC<PropsWithChildren<IModalProps>> = (props): React.ReactPortal => {
  const handleClick: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onClick();
  };

  const fullModal = (
    <div className="overlay" onClick={handleClick}>
      <div className="centered">{props.children}</div>
    </div>
  );
  return createPortal(fullModal, document.body);
};
export default Modal;
