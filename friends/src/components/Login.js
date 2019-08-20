import React from 'react';
import { withFormik,Form, Field} from 'formik';

 import * as Yup from 'yup';
 import axios from 'axios';


function Login({values, errors, touched}){

    return <div className = 'form'>
        <Form>

          <div>
            {errors.username && <p>{errors.username}</p>}
             <Field
                type = 'text'
                name = 'username'
                placeholder = 'Username'
            />
          </div>
          
          <div>
            {touched.username && errors.password && <p>{errors.password}</p>}
             <Field
                type = 'password'
                name = 'password'
                placeholder = 'password'
              />
          </div>

            <button type = 'submit'>Submit</button>

        </Form>


    </div>
};

const FormikLogin = withFormik({
    mapPropsToValues({username, password}){

        return{
            username: username || '',
            password: password || '',
        };
    },

    handleSubmit(values, { resetForm }){

        console.log('Handle Submit Values:',values)

        axios.post('http://localhost:5000/api/register', values)

        .then(response => {
            console.log('Axios.post Response:', response)
            resetForm();
        })

        .catch(error => {
            console.log('Axios.post Error:', error)
        });
        //Add error cannot have the same username or passwords as anyone else who registers
        
    },

    //========Validation Schema============

    validationSchema: Yup.object().shape({

        username: Yup.string()
         .min(1,'username not valid.')
         .required('username is required.'),
        

        password: Yup.string()
         .min(4, 'Password must be longer than 4 characters')
         .required('Password is required'),

    }),

    //=====================================
})(Login)

export default FormikLogin