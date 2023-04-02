import { useRef } from 'react';
import { CgCloseR } from 'react-icons/cg';
import styles from './modal.module.scss';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleModalStatus } from '../../features/slices/autoBasketSlice';
import { Button } from '../button/Button';

// type ViewModalType = ReturnType<typeof toggleModalStatus>;

interface ModalData {
    header: string;
    closeButton: boolean;
    text: string;
    // viewModal: ViewModalType;
    // viewModal: () => void;
    handleBasket: () => void;
}

function Modal(props: ModalData): JSX.Element {
    const modal = useRef(null);
    const { header, closeButton, text, handleBasket } = props;
    const modalStatus = useAppSelector((state) => state.autoBasket.isModal);
    const dispatch = useAppDispatch();

    return (
        <div>
            {modalStatus && (
                <div
                    ref={modal}
                    onClick={(e) => {
                        if (e.target === modal.current) {
                            dispatch(toggleModalStatus(false));
                        }
                    }}
                    className={styles.modalBackground}
                >
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h3 className={styles.title}>{header}</h3>
                            {closeButton && (
                                <CgCloseR
                                    onClick={() => {
                                        dispatch(toggleModalStatus(false));
                                    }}
                                    className={styles.icon}
                                />
                            )}
                            <p className={styles.text}>{text}</p>
                            <div className={styles.btnGroup}>
                                <Button
                                    backgroundColor="#26a69a"
                                    text="Ok"
                                    addToBasket={() => {
                                        dispatch(toggleModalStatus(false));
                                        handleBasket();
                                    }}
                                />
                                <Button
                                    backgroundColor="#26a69a"
                                    text="Cancel"
                                    handlModal={() =>
                                        dispatch(toggleModalStatus(false))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
