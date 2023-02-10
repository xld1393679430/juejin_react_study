import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const Page = () => {
  const initialValues = {
      username: '章三',
      content: '内容',
      subject: 'web'
  }

  const handleSubmit = (values) => {
      console.log(values);
  }

  const schema = Yup.object({
    username: Yup.string().max(15, '最大长度不能大于15').required('请输入用户名')
  })

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <Form>
                <Field name="username"></Field>
                <ErrorMessage name="username" />

                <Field as="textarea" name="content"></Field>
                <Field as="select" name="subject">
                    <option value="java">java</option>
                    <option value="web">web</option>
                </Field>
                <button type="submit">提交</button>
            </Form>
      </Formik>
  )
}


export default Page;