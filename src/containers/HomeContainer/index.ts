import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const HomeContainer = () => {
  // useNavigate hook
  const navigate = useNavigate();

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

    // onSubmit function for submit form
    onSubmit: async (values) => {
      await fetch('https://mock-api.arikmpt.com/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log('success');
      // navigate to login container if success register
      navigate('/login');
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
  });

  // render component
  return (
    // Card component from components folder
    <Card border={false} className=" ">
      <Card border>
        // Form element
        <form onSubmit={formMik.handleSubmit}>
        
        </form>
      </Card>
    </Card>
  );
};


export default HomeContainer;