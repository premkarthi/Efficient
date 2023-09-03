import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './components/Form'

test('renders a form and submits it', () => {
  const { getByLabelText, getByText } = render( <Form/>);

  // const emailInput = getByLabelText('Email');
  // fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  // const submitButton = getByText('Submit');
  // fireEvent.click(submitButton);

  // ...
});
