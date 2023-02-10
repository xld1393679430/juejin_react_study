import { useFormik } from "formik"

const Page = () => {
    const formik = useFormik({
        initialValues: {
            email: 'default@a.com',
            username: 'aa'
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <p>
                <label htmlFor="username">Username</label>
                <input
                    type="username"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </p>
            <p>
                <button type="submit">提交</button>
            </p>
        </form>
    )
}

export default Page