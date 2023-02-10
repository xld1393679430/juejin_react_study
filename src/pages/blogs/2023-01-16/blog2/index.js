import React from 'react';
import { useFormik } from 'formik';

const Page = () => {
  const formik = useFormik({
    initialValues: { username: '章三' },
    validate: values => {
      const errors = {}
      if (!values.username) {
        errors.username = '请输入用户名'
      }
      return errors
    },
    onSubmit: values => {
      console.log(values, 'values')
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div>{formik.touched.username && formik.errors.username}</div>
      <button>提交</button>
    </form>
  )
}

export default Page;