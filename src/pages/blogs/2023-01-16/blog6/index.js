import { Formik } from "formik";
import * as Yup from 'yup';

const Page = () => {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string().max(15, 'max length is 15').required('请输入username'),
                password: Yup.string().max(10, 'max length is 10').required('请输入password')
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values, 'values')
                setSubmitting(true)
                setTimeout(() => {
                    setSubmitting(false)
                }, 2000)
            }}
        >
            {
                (formik) => {
                    const {username: t_username, password: t_password } = formik.touched
                    const {username: e_username, password: e_password } = formik.errors
                    return (
                        <form onSubmit={formik.handleSubmit}>
                            <p>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" {...formik.getFieldProps('username')} />
                                {
                                    t_username && e_username ? e_username : null
                                }
                            </p>
                            <p>
                                <label htmlFor="password">Password</label>
                                <input type="text" id="password" {...formik.getFieldProps('password')} />
                                {
                                    t_password && e_password ? e_password : null
                                }
                            </p>
                            <p>
                                <button type="submit">提交</button>
                            </p>
                        </form>
                    )
                }
            }

        </Formik>
    )
}

export default Page