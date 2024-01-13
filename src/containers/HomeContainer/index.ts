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

  return <div>index</div>;
};

export default HomeContainer;