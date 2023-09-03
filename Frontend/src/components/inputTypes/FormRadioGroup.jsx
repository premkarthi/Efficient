import React from 'react'
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


function FormRadioGroup({ label, name, value, onChange, error , options}) {
  return (
    <div className={error ? 'formGroup errorGroup': 'formGroup'}>
       <label htmlFor={name}>
        {label} <span className='error'>*</span>
      </label>
        <div className='formInput'>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name={name}
                value={value}
                id={name}
                onChange={onChange}
            >
                {
                    options.map((option, i)=>{
                        return <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
                    })
                }
                
            </RadioGroup>
        </FormControl>
        </div>
        {error && <div className="formError">{error}</div>}
    </div>
  )
}

export default FormRadioGroup