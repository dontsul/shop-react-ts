import { Formik, Form } from 'formik';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearBasket } from '../../features/slices/autoBasketSlice';
import { MyTextInput } from '../myTextInput/MyTextInput';
import { PhoneInput } from '../phoneInput/PhoneInput';
import * as Yup from 'yup';
import styles from './customForm.module.scss';

interface FormTypes {
    name: string;
    surname: string;
    age: string;
    address: string;
    phone: string;
}

const initialValues: FormTypes = {
    name: '',
    surname: '',
    age: '',
    address: '',
    phone: '',
};

export const CustomForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const listAutosInBasket = useAppSelector(
        (state) => state.autoBasket.itemsBasket
    );

    return (
        <div className={styles.wrapperForm}>
            <h2 className={styles.title}>Information</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    name: Yup.string().required().min(2),
                    surname: Yup.string().required().min(2),
                    age: Yup.number().required().min(1),
                    address: Yup.string().required(),
                    phone: Yup.string().required().min(10),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    dispatch(clearBasket());
                    console.log(JSON.stringify(listAutosInBasket, null, 2));
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {(formikProps) => (
                    <Form>
                        <MyTextInput label="Name" type="text" name="name" />
                        <MyTextInput
                            label="Surname"
                            type="text"
                            name="surname"
                        />
                        <MyTextInput label="Age" type="number" name="age" />
                        <MyTextInput
                            label="Address"
                            type="text"
                            name="address"
                        />
                        <PhoneInput label="Phone" name="phone" id="phone" />
                        <button
                            className={styles.btn}
                            disabled={formikProps.isSubmitting}
                            type="submit"
                        >
                            Checkout
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
