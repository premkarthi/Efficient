import React from 'react';
import Input from '@mui/material/Input';


function FormGroup({ label, name, value, onChange, placeholder, error, description }) {
  return (
    <div className={error ? 'formGroup errorGroup' : 'formGroup'}>
      <label htmlFor={name}>
        {label} <span className='error'>*</span>
      </label>
      <div className={description ? 'formInput full' : 'formInput'}>
        {description && name === 'job' ? <><div className="formDesc">
      <p>Write None if no work experience. Provide the following details if yes:</p>
      <ol>
          <li>Job Title </li>
          <li>Job duties</li>
          <li>Company Name </li>
      </ol>
      <p>Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</p>
  </div></> : ''}
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {error && <div className="formError">{error}</div>}
    </div>
  );
}

export default FormGroup;
