import { useField, FieldAttributes } from 'formik';
import styles from './myTextInput.module.scss';

// type CustomInputProps = {
//     label: string;
// } & FieldAttributes<{}>;

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}
// type CustomInputProps = FieldAttributes<{}> & {
//     label: string;
//     type?: 'text' | 'number' | 'password' | 'email'; // добавьте поддержку типов
// };

export const MyTextInput = ({
    label,
    ...props
}: CustomInputProps): JSX.Element => {
    const [field, meta] = useField(props);
    console.log(field);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} ref={undefined} />

            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
};
