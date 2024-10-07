import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';


export const RegisterFormikPage = () => {





    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min( 2, 'El nombre debe ser de 3 caracteres o más').max(15, 'El nombre debe ser menor de 15 carácteres').required('Requerido'),
                        email: Yup.string().email('Revise el formato del correo').required('Requerido'),
                        password: Yup.string().min( 6, 'Mínimo 6 letas').required('Requerido'),
                        password2: Yup.string().oneOf( [ Yup.ref('password') ], 'Las contraseñas no son iguales').required('Requerido'),
                    })
                }
            >
                { ({handleReset}) => (
                    <Form> 
                        <MyTextInput label="Nombre" name="name" placeholder="Arturo" />
                        <MyTextInput label="Email" name="email" type="email" placeholder="algo@google.com" />
                        <MyTextInput label="Password" name="password" type="password" placeholder="******" /> 
                        <MyTextInput label="Confirm password" name="password2" type="password" placeholder="******" /> 
                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset } >Reset Form</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
