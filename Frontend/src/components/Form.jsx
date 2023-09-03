import React, { useState } from 'react'
import FormGroup from './inputTypes/FormGroup';
import formInputs  from './formInput.json'
import FormSelectGroup from './inputTypes/FormSelectGroup';
import FormRadioGroup from './inputTypes/FormRadioGroup';
import Footer from './Footer';
import sendToDB from './sendToDB';
import sendMail from './sendMail';

function From({setStatus}) {
    const [formList] = useState(formInputs)
    const [formErrors, setFormErrors] = useState({});
    let firstErrorField = null;
    const [formData, setFormData] = useState({
        email: '',
        fullname: '',
        age: '',
        educationlevel: '-1',
        highereducation: '',
        study:'',
        job: '',
        institute: '',
        program: '',
        country: '',
        goals : '',
        englishScoreListening : '',
        englishScoreReading : '',
        englishScoreSpeaking : '',
        englishScoreWriting : '',
        tutionfeepaid: '',
        tutionfee: '',
        GIC: '',
        tutionfeeGIC: ''
    });
    
    const validateField = (name, value) => {

      const validationRules = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        age: /^[0-9]+$/,
        educationlevel: /^(?:(?!-1).)*$/,
        englishScoreListening :  /^[0-9]+$/,
        englishScoreWriting :  /^[0-9]+$/,
        englishScoreReading :  /^[0-9]+$/,
        englishScoreSpeaking :  /^[0-9]+$/,
        tutionfee: /^[0-9]+$/,
        tutionfeeGIC: /^[0-9]+$/,
      };
      
      if(value !== ''){
          if (validationRules[name] && !validationRules[name].test(value)) {
              return `Must be a valid ${name}`
            } else {
              return ``
            }
      }
      else{
          return `This is a required question`
      }
      
    };
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      let getError = validateField(name, value);
    
      setFormErrors({
          ...formErrors,
          [name]: getError,
        });

    };
  
    const formSubmit = (e) => {
      e.preventDefault();
      const updatedFormErrors = {};
      for (const fieldName in formData) {
          if (formData.hasOwnProperty(fieldName)) {
            const fieldValue = formData[fieldName];

            const errorMessage = validateField(fieldName, fieldValue);
            if (errorMessage) {
                updatedFormErrors[fieldName] = errorMessage;
                if (!firstErrorField) {
                  firstErrorField = fieldName;
                }
        
                break;
            }
          }
        }


        if (firstErrorField) {
          let errorFieldElement = document.getElementById(firstErrorField);
          errorFieldElement = errorFieldElement.parentElement.closest('.formGroup');
          if (errorFieldElement) {
              errorFieldElement.scrollIntoView({
                behavior: 'smooth',
                top: -100
              });
          }
        }

        setFormErrors(updatedFormErrors);

        if (Object.keys(updatedFormErrors).length === 0) {
            sendToDB(formData)
            sendMail(formData)
            clearForm()
            setStatus(false)
        }
      
    };
    
    const clearForm = () => {
      setFormData({
          email: '',
          fullname: '',
          age: '',
          educationlevel: '-1',
          highereducation: '',
          study:'',
          job: '',
          institute: '',
          program: '',
          country: '',
          goals : '',
          englishScoreListening : '',
          englishScoreReading : '',
          englishScoreSpeaking : '',
          englishScoreWriting : '',
          tutionfeepaid: '',
          tutionfee: '',
          GIC: '',
          tutionfeeGIC: ''
        })
        setFormErrors({})

        window.scrollTo({
          behavior: 'smooth',
          top: -100
        });
    }


  return (
        <div className="forms">
            {
                formList.length > 0 && formList.map((item, i) => {
                    if (item.type === 'Input'){
                        return <FormGroup  
                            key={i}
                            label={item.title}
                            name={item.name}
                            value={formData[`${item.name}`]}
                            onChange={onChange}
                            placeholder={item.placeholder}
                            error={formErrors[`${item.name}`]}
                            description={item.description}
                        />
                    }
                    if(item.type === 'Select'){
                        return <FormSelectGroup 
                                key={i}
                                label={item.title}
                                name={item.name}
                                value={formData[`${item.name}`]}
                                onChange={onChange}
                                placeholder={item.placeholder}
                                error={formErrors[`${item.name}`]}
                                options={item.options}
                                />
                    }
                    if(item.type === 'Radio'){
                        return <FormRadioGroup
                                key={i}
                                label={item.title}
                                name={item.name}
                                value={formData[`${item.name}`]}
                                onChange={onChange}
                                error={formErrors[`${item.name}`]}
                                options={item.options}
                                />
                    }
                }) 
            }

            <Footer  formSubmit={formSubmit} clearForm={clearForm}/>
        </div>
  )
}

export default From