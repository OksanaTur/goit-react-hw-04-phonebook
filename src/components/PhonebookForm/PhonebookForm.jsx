import React from 'react';
import { Formik, Field } from 'formik';
import propTypes from 'prop-types';
import { FormInput, FormBtn, Form } from './Phonebook.styled';


const initialValues = { name: '', number: '' };

function PhonebookForm({ onSubmit }) {
    function handleSubmit(values, { resetForm }) {
        onSubmit(values);
        resetForm();
    }
  

    return (
        <>
            <Formik
                initialValues={{ initialValues }} onSubmit={handleSubmit}>
                <Form>
                    <FormInput>Name
                        <Field
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required /></FormInput>
                    <FormInput>Number
                        <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required /></FormInput>
                    <FormBtn type='submit'>Add contact</FormBtn>
                </Form>
            </Formik>
        </>
    )

}
PhonebookForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};

export default PhonebookForm;

