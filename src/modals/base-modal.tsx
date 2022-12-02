import { ReactNode } from "react";
import { Modal } from "react-overlays";

import { renderBackdrop } from "../components/backdrop";

interface Props {
  show: boolean;
  onHide: () => void;
  children: ReactNode;
}

export const BaseModal = ({ show, onHide, children }: Props) => {
  return (
    <Modal show={show} onHide={onHide} renderBackdrop={renderBackdrop}>
      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          width: 400,
          zIndex: 1040,
          border: "1px solid #e5e5e5",
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          padding: 20,
          borderRadius: 12,
        }}
      >
        {children}
      </div>
    </Modal>
  );
};
