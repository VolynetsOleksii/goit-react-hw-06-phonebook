import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Container/Container.styled';
import { FormStyle, InputForm, LabelForm } from './Form.styled';

export const ContactForm = ({ onSubmit }) => {
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;
    onSubmit({ name, number });
    evt.currentTarget.reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <LabelForm>
        Name{' '}
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>
      <LabelForm>
        Number{' '}
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
