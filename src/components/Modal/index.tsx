import React from "react";

import "./index.css";

export type ModalProps = {
    children: React.ReactNode;
    canSee: boolean;
    close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, canSee, close }) => {
    return (
        <div className={`ModalContainer ${!canSee ? "hideModal": ""}`} 
        onClick={(event : any) => {
            console.log(event)
            if ( event.target.className === "ModalContainer ") close();
        }}
        >
            <div className="Modal">
                {children}
            </div>
        </div>
    );
}

export default Modal;
