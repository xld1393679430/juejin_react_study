import { Formik, Form, Field } from 'formik';

const Page = () => {
    return (
        <Formik
            initialValues={{
                friends: ['a', 'b']
            }}
            onSubmit={(values) => {
                console.log(values, 'onSubmit--values')
            }}
        >
            <Form>
                <Field name="friends[0]"></Field>
                <Field name="friends[1]"></Field>
                <button type='submit'>提交</button>
            </Form>
        </Formik>
    )
}

export default Page