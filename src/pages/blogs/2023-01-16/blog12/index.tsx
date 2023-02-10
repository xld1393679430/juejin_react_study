import * as React from "react";
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FormikProps,
  FieldProps,
} from "formik";

interface MyFormValues {
  firstName: string;
}

const Page: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: "aa" };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions: FormikHelpers<MyFormValues>) => {
          console.log(values, "onSubmit--values");
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <p>
            <label htmlFor="firstName">first name：</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="请输入first name"
            ></Field>
          </p>
          <button type="submit">提交</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Page;
