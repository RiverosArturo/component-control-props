import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import { Form } from '../interfaces/interfaces';

import '../styles/styles.css';


export const RegisterPage = () => {

    const { formData, isValidEmail, onChange, resetForm, name, email, password, password2 } = useForm<Form>({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    // const { name, email, password, password2 } = formData;

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={ `${!isValidEmail( email ) && 'has-error'}` }
                />
                { !isValidEmail( email ) && <span>Email no es válido</span> }

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ onChange }
                    className={`${ password.trim().length < 6 && password.trim().length > 0 && 'has-error'} ${password.trim().length <= 0 && 'has-error'}`}
                />
                { password.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe contener al menos 6 caracteres</span> }

                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                    className={`${ password2.trim().length <= 0 && 'has-error'} ${ password2 !== password && password.trim().length > 0 && 'has-error'}`}
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2 !== password && password.trim().length > 0 && <span>Las contraseñas deben de ser iguales</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset Form</button>

            </form>

        </div>
    );
}
