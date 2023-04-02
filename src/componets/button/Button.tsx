import styles from './button.module.scss';

interface ButtonProps {
    backgroundColor: string;
    text: string;
    handlModal?: () => void;
    addToBasket?: () => void;
    deleteFromBasket?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
    const {
        backgroundColor = '',
        text = '',
        handlModal = Function.prototype,
        addToBasket = Function.prototype,
        deleteFromBasket = Function.prototype,
    } = props;

    return (
        <div className="wrap-btn">
            <button
                className={styles.btn}
                style={{
                    backgroundColor: `${backgroundColor}`,
                    margin: '10px',
                }}
                onClick={() => {
                    addToBasket();
                    deleteFromBasket();
                    handlModal();
                }}
            >
                {text}
            </button>
        </div>
    );
}
