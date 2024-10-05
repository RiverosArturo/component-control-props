import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';



export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                        jobType: Yup.string().notOneOf(['it-jr'],'Esta opción no es permitida').required('Requerido')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput label="First Name" name="firstName" placeholder="Arturo" />
                            <MyTextInput label="Last Name" name="lastName" placeholder="Riveros" />
                            <MyTextInput label="Email Address" name="email" placeholder="algo@google.com" type="email" />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It jr.</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms" />
                
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
