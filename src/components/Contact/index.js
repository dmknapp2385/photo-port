import React, {useState} from "react";

function ContactForm () {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
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
                    <input onChange={handleChange} defaultValue={name}  type='text' name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input onChange={handleChange} defaultValue={email}  type='email' name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea onChange={handleChange} defaultValue={message}  name='message' rows='5' />
                </div>
                <button type="sumbit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;