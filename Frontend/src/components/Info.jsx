import React from 'react';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div className='info'>
      <h2>Customized SOP Generator</h2>
      <p className='desc'>
      Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs. 
      </p>
      <p>
      If you would like to get it edited, reviewed, or drafted by our experts, you can get in touch with us:&nbsp;
        <Link to="">
           https://effizient-immigration-inc.square.site/s/shop
        </Link>
        .
      </p>
      <div className="line"></div>
      <p className='signUp'>
        <Link to="">Sign in to Google</Link> to save your progress.&nbsp;
        <Link to=""> Learn more</Link>
      </p>
      <div className="line"></div>

      <p className="error">* Indicates required questions</p>
    </div>
  );
}

export default Info;
