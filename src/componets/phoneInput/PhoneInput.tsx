import { useField } from 'formik';
import { PatternFormat } from 'react-number-format';
import styles from './phoneInput.module.scss';
import { FieldAttributes } from 'formik';

type CustomInputProps = {
    label: string;
} & FieldAttributes<{}>;

export function PhoneInput({ label, ...props }: CustomInputProps): JSX.Element {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <PatternFormat
                format="(###) ###-####"
                mask="_"
                allowEmptyFormatting
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                type="tel"
            />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
}
