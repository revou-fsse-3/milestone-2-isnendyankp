import React from 'react'
import { useFormik } from 'formik';

const HomeContainer = () => {


  // interface for form props
  interface FormProps {
    email: string;
    name: string;
    password: string;
  }

  // useFormik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },

    // validation for username, email & password
    validationSchema: yup.object({
      name: yup.string().required('name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),

  return <div>index</div>;
};


export default HomeContainer;