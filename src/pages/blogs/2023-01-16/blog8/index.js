import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

const MyInput = ({ label, ...otherProps }) => {
    const [field, meta] = useField(otherProps)
    console.log(label, otherProps, field, meta, 'MyInput');
    return (
        <>
            <label htmlFor={otherProps.id || otherProps.name}>{label}：</label>
            <input {...field} {...otherProps} />
            {
                meta.touched && meta.error ? meta.error : null
            }
        </>
    )
}

const Page = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(10, 'max 10').required('required'),
                lastName: Yup.string().max(10, 'max 10').required('required'),
            })}
        >
            <Form>
                <p>
                    <MyInput name="firstName" type="text" label="user name" placeholder="请输入user name" />
                </p>
                <p>
                    <MyInput name="lastName" type="text" label="last name" placeholder="请输入last name" />
                </p>
                <p>
                    <button type="submit">提交</button>
                </p>
            </Form>
        </Formik>
    )
}

export default Page