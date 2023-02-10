import { Formik, Form, Field } from 'formik';

const Page = () => {
    return (
        <Formik
            initialValues={{
                user: {
                    name: 'a',
                    age: 10
                }
            }}
            onSubmit={(values) => {
                console.log(values, 'onSubmit--values')
            }}
        >
            <Form>
                <Field name="user.name"></Field>
                <Field name="user.age"></Field>
                <button type='submit'>提交</button>
            </Form>
        </Formik>
    )
}

export default Page