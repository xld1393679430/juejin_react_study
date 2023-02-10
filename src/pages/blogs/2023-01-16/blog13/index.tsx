import * as React from "react";
import { 
    withFormik, 
    Form, 
    FormikProps, 
    Field, 
    ErrorMessage, 
    FormikValues, 
    FormikErrors,
    FormikHelpers
} from "formik";

interface FormValues {
  email: string;
  password: string;
}

interface otherProps {
  message: string;
}

const InnerForm = (props: otherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <p>
        <Field type="email" name="email"></Field>
        <ErrorMessage name="email" />
      </p>
      <p>
        <Field type="password" name="password"></Field>
        <ErrorMessage name="password" />
      </p>
      <p>
        <button type="submit" disabled={isSubmitting}>
          提交
        </button>
      </p>
    </Form>
  );
};

interface MyFormProps {
    initialEmail?: string;
    message: string;
}

const MyForm = withFormik<MyFormProps, FormValues>({

    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        }
    },

    validate: (values: FormikValues) => {
        let errors: FormikErrors<FormikValues> = {}
        if (!values.email) {
            errors.email = '请输入email'
        } else if (!values.password) {
            errors.password = '请输入password'
        } 
        return errors;
    },

    handleSubmit: values => {
        console.log(values, 'handleSubmit--values')
    },

})(InnerForm);

const Page = () => {
  return <MyForm message="sign"></MyForm>;
};

export default Page;
