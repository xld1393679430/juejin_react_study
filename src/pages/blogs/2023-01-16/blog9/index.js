import React from 'react';
import { Formik, Field, Form } from 'formik';

const CheckboxExample = () => (
    <div>
        <h1>Checkboxes</h1>
        <p>
            This example demonstrates how to properly create checkboxes with Formik.
        </p>
        <Formik
            initialValues={{
                isAwesome: false,
                terms: false,
                newsletter: false,
                jobType: ['designer'],
                location: [],
            }}
            onSubmit={async (values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (
                <Form>
                    <div className="label">Basic Info</div>
                    <p>
                        <label>
                            <Field type="checkbox" name="isAwesome" />
                            Are you awesome?
                        </label>
                    </p>
                    <div className="label">
                        What best describes you? (check all that apply)
                    </div>
                    <p>
                        <label>
                            <Field type="checkbox" name="jobType" value="designer" />
                            Designer
                        </label>
                        <label>
                            <Field type="checkbox" name="jobType" value="developer" />
                            Developer
                        </label>
                        <label>
                            <Field type="checkbox" name="jobType" value="product" />
                            Product Manager
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="jobType"
                                value="founder"
                                checked={values.jobType.includes('founder')}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            CEO / Founder
                        </label>
                    </p>
                    <p>
                        <label htmlFor="location">Where do you work?</label>
                        <Field
                            component="select"
                            id="location"
                            name="location"
                            multiple={true}
                        >
                            <option value="NY">New York</option>
                            <option value="SF">San Francisco</option>
                            <option value="CH">Chicago</option>
                            <option value="OTHER">Other</option>
                        </Field>
                    </p>
                    <p>
                        <label>
                            <Field type="checkbox" name="terms" />I accept the terms and
                            conditions.
                        </label>
                        {values.terms ? (
                            <div>
                                <label>
                                    <Field type="checkbox" name="newsletter" />
                                    Send me the newsletter <em style={{ color: 'rebeccapurple' }}>
                                        (This is only shown if terms = true)
                                    </em>
                                </label>
                            </div>
                        ) : null}
                    </p>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default CheckboxExample;