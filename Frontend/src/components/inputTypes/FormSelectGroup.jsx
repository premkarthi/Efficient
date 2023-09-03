import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function FormSelectGroup({ label, name, value, onChange, placeholder, error,options }) {
  return (
    <div className={error ? 'formGroup errorGroup': 'formGroup'}>
      <label htmlFor={name}>
        {label} <span className='error'>*</span>
      </label>
    <div className='formInput'>
    <FormControl sx={{ m: 1, minWidth: 170 }}>
        <Select
             id={name}
             name={name}
             value={value}
             onChange={onChange}
             placeholder={placeholder}
             defaultValue={-1}
        >
            <MenuItem value="-1">Choose</MenuItem >
            {
                options.map((option, i)=>{
                    return <MenuItem key={i} value={option}>{option}</MenuItem>
                })
            }
           
        </Select>
    </FormControl>
    </div>
    {error && <div className="formError">{error}</div>}
</div>
  )
}

export default FormSelectGroup