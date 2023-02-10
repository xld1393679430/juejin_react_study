import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const Page = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(10, 'max length is 10').required('请输入firstName'),
                lastName: Yup.string().max(10, 'max length is 10').required('请输入lastName')
            })}
        >
            <Form>
                <p>
                    <input type="text" autoComplete />
                </p>
                <p>
                    <label htmlFor="firstName">firstName：</label>
                    <Field name="firstName" id="firstName" placeholder="请输入firstName" type="text"></Field>
                    <ErrorMessage name="firstName" />
                </p>
                <p>
                    <label htmlFor="lastName">lastName：</label>
                    <Field name="lastName" id="lastName" placeholder="请输入lastName" type="text"></Field>
                    <ErrorMessage name="lastName" />
                </p>
                <p>
                    <button type="submit">提交</button>
                </p>
            </Form>
        </Formik>
    )
}

export default Page