import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm () {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>
                Contact Me
            </h1>
            <form onSubmit={handleSubmit} id='contact-form'>
                <div>
                    <label htmlFor='name' >Name:</label>
                    <input onBlur={handleChange} defaultValue={name}  type='text' name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input onBlur={handleChange} defaultValue={email}  type='email' name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea onBlur={handleChange} defaultValue={message}  name='message' rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="sumbit">Submit</button>
                
            </form>
        </section>
    )
}

export default ContactForm;