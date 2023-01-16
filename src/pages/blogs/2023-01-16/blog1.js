import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert } from 'antd'

const SignInSchema = Yup.object().shape({
	email: Yup.string().email().required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(4, "Password is too short - should be 4 chars minimum"),
});

const Index = () => {
	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitForm = () => {
		console.log(formValues);
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {
			submitForm();
		}
	}, [formErrors, isSubmitting, submitForm]);

	return (
		<div>
			<Alert message="使用Formik和Yup进行React 表单验证" type="success" />

			<Formik
				initialValues={initialValues}
				validationSchema={SignInSchema}
				onSubmit={submitForm}
			>
				{(formik) => {
					const { errors, touched, isValid, dirty } = formik;
					return (
						<div className="container">
							<h1>Sign in to continue</h1>
							<Form>
								<p className="form-row" style={{ display: "flex" }}>
									<label htmlFor="email" style={{ width: 80 }}>Email</label>
									<Field
										autoComplete="new-password"
										type="email"
										name="email"
										id="email"
										className={errors.email && touched.email ?
											"input-error" : null}
									/>
									<ErrorMessage name="email" component="span" className="error" />
								</p>

								<p className="form-row" style={{ display: "flex" }}>
									<label htmlFor="password" style={{ width: 80 }}>Password</label>
									<Field
										autoComplete="new-password"
										type="text"
										onFocus={e => e.target.type = 'password'}
										name="password"
										id="password"
										className={errors.password && touched.password ?
											"input-error" : null}
									/>
									<ErrorMessage
										name="password"
										component="span"
										className="error"
									/>
								</p>

								<button
									type="submit"
									className={dirty && isValid ? "" : "disabled-btn"}
									disabled={!(dirty && isValid)}>
									Sign In
								</button>
							</Form>
						</div>
					);
				}}
			</Formik>
		</div>
	);

}

export default Index